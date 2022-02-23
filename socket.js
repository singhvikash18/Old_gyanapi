
const moment = require('moment');
var socketio = require("socket.io");
var io ;
const notificationTable = require('./model/notification_table');
const sessionTable = require('./model/session_room');
const chatTable = require('./model/chat_table');
const videoTable = require('./model/coursevideo');


let broadcaster = {};



const formatmessage = (username,text)=>{
    return {
      username,
      text,
      time: moment().format('h:mm a')
    };
  }


const initSocketIo = {};
const sesionRoom = [];

initSocketIo.init = (server) =>{
  io = socketio(server,{
    cors: {
     origin: "https://gyanais.vercel.app",
      // origin:"http://localhost:3000",
      credentials: true
    }
  });

const getuser = async(socketioid) =>{
  const user = await sessionTable.findOne({socketid:socketioid}).populate("userid");
        //const users = sessionTable.find({socketid:socketio.id});
        //console.log(users)
        return user
}

const getroom = async(socketioid)=>{
  //console.log(socketioid)
  const user = await sessionTable.findOne({socketid:socketioid}).populate("userid");
  //console.log(user)
  return user.sessionroomid
}

const getalluser = async(roomid)=>{
  //console.log(roomid)
  const users = await sessionTable.findOne({sessionroomid:roomid}).populate("userid");
  return users
}

  io.on("connection", (socketio)=>{
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
        socketio.on("create-session-room",async({userid,coursevideoid})=>{
          //console.log(coursevideoid);

         const checkit = await sessionTable.findOne({sessionroomid:coursevideoid, userid:userid});

         if(checkit){
          socketio.emit("get-session-room",checkit);
         }else{

          session_room.push(coursevideoid);
          const room_body ={userid:userid,sessionroomid:coursevideoid,socketid:socketio.id};
          const room =await sessionTable.create(room_body);
          
          socketio.emit('get-session-room',room);
         }
        });

        //join room 

        socketio.on("join-session-room", async({ userdetail, coursevideoid, data })=>{
         // const user =userJoin(socketio.id,username,room);
         //console.log(`sdfsdfds${userdetail,coursevideoid,data}`)
         //console.log(userdetail);
         socketio.username = userdetail.firstname;
         socketio.roomid = coursevideoid;

          socketio.join(coursevideoid);
          const chat_body = {message:userdetail.firstname +" has connected to room",
          sessionid:data._id,
         // room:data.sessionroomid,
         firstname:userdetail.firstname,
          username:userdetail.username,
          suserid:userdetail._id,
          userid:userdetail._id,
          roomid:coursevideoid, 
          serverUserType:"server"
        }
       // console.log(chat_body);
        const sessionChat = await chatTable.create(chat_body);
        // Welcome current user
        const firstname = userdetail.firstname
        const msg = ` ${userdetail.firstname} Welcome to ChatCord`;
        //socketio.emit('message',formatmessage(firstname, msg));

        const msg2 = ` ${userdetail.firstname} has joined the chat`;
        // Broadcast when a user connects
        socketio.broadcast
      .to(coursevideoid)
      .emit('message', formatmessage(firstname, msg2));
          
          //socketio.emit('update-message',sessionChat);
         // io.to(user.room).emit('room users',{room:user.room,users:getRoomUsers(user.room)});

        });


       
        //Listen for chatMessage


        socketio.on('sendMessage',async ({msg, userid, roomid}) =>{
          //console.log(userid)
          const user = await sessionTable.findOne({userid:userid,sessionroomid:roomid}).populate("userid");
         // console.log(user)
          const chat_body = {message:msg,
          sessionid:user._id,
          //room:user.sessionroomid,
          firstname:user.userid.firstname,
          
          username:user.userid.username,
          suserid:user.userid._id,
          userid:user.userid._id,
          roomid:user.sessionroomid, 
          serverUserType:"real"
        }
            //console.log(chat_body);
        const sessionChat = await chatTable.create(chat_body);
        
            io.to(user.sessionroomid).emit('message', sessionChat);
        });



        


        //white-board

        socketio.on("draw-coordinates", function (roomid, data) {
           console.log(data);
          io.emit("draw", roomid, data);
        });
     
        socketio.on("web-cam", function ({roomid, userid}) {
          console.log({roomid, userid});
          io.to(roomid).emit("get-cam", userid);
       });
        
      // webcam start

       socketio.on("broadcaster", () => {
        broadcaster = socketio.id;
        socketio.broadcast.emit("broadcaster");
      });
        
      socketio.on("watcher", () => {
        socketio.to(broadcaster).emit("watcher", socketio.id);
      });

      socketio.on("offer", (id, message) => {
        socketio.to(id).emit("offer", socketio.id, message);
        console.log(JSON.stringify(message))
      });
      socketio.on("answer", (id, message) => {
        socketio.to(id).emit("answer", socketio.id, message);
        //console.log(message)
      });
      socketio.on("candidate", (id, message) => {
        socketio.to(id).emit("candidate", socketio.id, message);
        //console.log(message)
      });

      // socketio.on("handleclassbutton",async({handleclass, roomid})=>{
      //   let result = await videoTable.findOneAndUpdate({_id:roomid,handleclass:handleclass})
      //   socketio.to(roomid).emit("receivedclassbutton",handleclass)
        
      // })


      //webcam end


          socketio.on("disconnect",()=>{
            socketio.to(broadcaster).emit("disconnectPeer", socketio.id);
          
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