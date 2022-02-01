const { result } = require("lodash");
var socketio = require("socket.io");
var io ;
const notificationTable = require('./model/notification_table');
const sessionTable = require('./model/session_room');
const chatTable = require('./model/chat_table');


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
        socketio.on("connect_error", (err) => {
          console.log(`connect_error due to ${err.message}`);
        });
       
        //chat room
        const session_room =[]
        socketio.on("create-session-room",async({userid,roomid})=>{

          session_room.push(roomid);
          const room_body ={sessionroomid:userid,userid:roomid};
          const room =await session_room.create(room_body);
          socketio.emit('get-session-room',room);
        });


        

        //join room 

        socketio.on("join-session-room ",async({userdetail,roomid,data})=>{
         // const user =userJoin(socketio.id,username,room);
         socketio.username = userdetail.firstname;
         socketio.roomid = roomid;

          socketio.join(roomid);
          const chat_body = {message:userdetail.firstname +"has connected to room",
          room:data.data._id,
          roomid:roomid,
          serverUserType:"server"
        }
        const sessionChat = await chatTable.create(chat_body);
          
          socketio.emit('update-message',sessionChat);
         // io.to(user.room).emit('room users',{room:user.room,users:getRoomUsers(user.room)});

        });
        socketio.on('chatMessage',msg =>{
          const user = getCurrentUser(socketio.id);
          io.to(user.room).emit('message',formatMessage(user.username,msg));
        });
     
        



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