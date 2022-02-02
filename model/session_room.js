const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    sessionstatus:{
        type:String,
        required:true,
        default:"active"
    },
    sessionroomid:{
        type:String,
        required:true
        
    },
    userid:{
        type:mongoose.SchemaTypes.ObjectId, ref:"User",
        required:true
    },
    socketid:{
        type:String,
        required:true,
        // unique:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('session_room',sessionSchema);
