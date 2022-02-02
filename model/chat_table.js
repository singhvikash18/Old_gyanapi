const { ObjectId, Timestamp } = require('mongodb')
const mongoose =require('mongoose')

const chatSchema = new mongoose.Schema({
    
    username:{
        type:String,
        
    },
    room:{
        type:String,
        required:true
    },
    sessionid:{
        type:ObjectId,
        required:true
    },
    userid:{
        type:ObjectId,
        // required:true
    },
    message:{
        type:String,
        required:true
    },
    serverUserType:{
        type:String,
        required:true
    },
    roomid:{
        type:ObjectId,
        required:true
    }

},
{
    timestamps:true
}
)
module.exports = mongoose.model('chat',chatSchema);