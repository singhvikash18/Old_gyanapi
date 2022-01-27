var socketio = require("socket.io");
var io ;


const initSocketIo = {};
const sesionRoom = [];

initSocketIo.init = (server) =>{
  io = socketio(server
    ,{
    cors: {
      origin: "https://gyanais.vercel.app",
      credentials: true
    }
  }
  );
    io.on("connection",(socketio)=>{
        console.log('connection is done.');
        socketio.on("disconnect",(socketio)=>{
            console.log('connection is closed')
        })

    })
    


}

initSocketIo.getIO = () => {
    // return previously cached value
    if (!io) {
      throw new Error("must call .init(server) before you can call .getio()");
    }
    return io;
  };

module.exports=initSocketIo;