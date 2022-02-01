const { ObjectId, Timestamp } = require('mongodb')
const mongoose =require('mongoose')

const chatSchema = new mongoose.Schema({
    chat_table:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
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
        required:true
    },
    message:{
        type:String,
        required:true
    },
    serverUserType:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
)
module.exports = mongoose.model('chat',chatSchema);