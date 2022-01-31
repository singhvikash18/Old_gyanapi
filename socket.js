const { result } = require("lodash");
var socketio = require("socket.io");
var io ;
const notificationTable = require('./model/notification_table');


const initSocketIo = {};
const sesionRoom = [];

initSocketIo.init = (server) =>{
  io = socketio(server,{
    cors: {
      origin: "https://gyanais.vercel.app",
      credentials: true
    }
  });
  io.on("connection",(socketio)=>{
        console.log('connection is done.');


        //get userid
        socketio.on('userid', async(userid)=>{
          if(userid !==null){
            
          
        // console.log(userid);
         
          let result = await notificationTable.find({user_id:userid,notification_status :0}).populate("videoid");
          
           // console.log(result)
           io.to(socketio.id).emit('notification', result);
          
        }
        // socketio.close(true);
        

        })


        socketio.on('readnotification',async(notificationid)=>{
          const query = {_id:notificationid}
          const update ={notification_status:1}
          const notify = await notificationTable.findOneAndUpdate(query,update);
          
        })



        socketio.on("disconnect",(socketio)=>{
          console.log('connection is closed');
      });
      

       
      })
  
       
   
}

initSocketIo.getIO = () => {
    // return previously cached value
    if (!io) {
      throw new Error("must call .init(server) before you can call.getio()");
    }
    return io;
  };

module.exports=initSocketIo;