const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    sessionstatus:{
        type:String,
        required:true,
        default:"active"
    },
    sessionroomid:{
        type:ObjectId,
        required:true
    },
    userid:{
        type:ObjectId,
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('session_room',sessionSchema);
