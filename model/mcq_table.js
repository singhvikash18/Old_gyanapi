const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const mcqSchema = new mongoose.Schema({
   
    course_id :{
        type:mongoose.SchemaTypes.ObjectId, ref:"Courses",
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    updatedAt:{
        type:String,
        required:true
    },
    bank_name:{
        type:String,
        required:true
    },
    mcqid:{
        type:mongoose.SchemaTypes.ObjectId, ref:"mcq_question",
        required:true
    }
},
{
    timestamps:true
});

module.exports =mongoose.model('mcq',mcqSchema);