const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomstatus:{
        type:String,
        required:true
    },
    roomid:{
        type:ObjectId,
        required:true,
        unique:true
    },
    instructor:{
        type:ObjectId,
        required:true
    }
},
{
    timestamps:true
})
module.exports = mongoose.model('roomTable',roomSchema);