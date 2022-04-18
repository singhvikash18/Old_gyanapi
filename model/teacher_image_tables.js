const { ObjectId } = require('mongodb');
const mongoose =require('mongoose')

const teacher_imageSchema = new mongoose.Schema({
    roomid:{
        type:String,
        required:true
    },
    courseid:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    imagename:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});
module.exports = mongoose.model('teacherimages',teacher_imageSchema);