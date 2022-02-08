const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema ({
    teacher_id:
    {
        type:String,
        required:true,
        unique:true
    },
    teacher_name:
    {
        type:String,
        required:true
    },
    teacher_address:
    {
        type:String,
        required:true
    },
    teacher_education:
    {
        type:String,
        required:true
    },
    teacher_bio:
    {
        type:String,
        required:true
    },
    teacher_achievment:
    {
        type:String,
        required:true
    },
    teacher_watch_time:
    {
        type:String,
        required:true
    },
    teacher_watch_time_month:
    {
        type:String,
        required:true
    },
    teacher_experience:
    {
        type:String,
        required:true
    },
    teacher_rates:
    {
        type:String,
        required:true
    },
    teacher_created_at:
    {
        type:String,
        required:true
    },
    notes_id:{
        type:mongoose.SchemaTypes.ObjectId, ref:"notes",
        required:true
    },
    mcq_id:{
        type:mongoose.SchemaTypes.ObjectId, ref:"mcq",
        required:true
    },
    syllabus_id:{
        type:mongoose.SchemaTypes.ObjectId, ref:"syllabus",
        required:true
    }  
})
module.exports = mongoose.model('teacher',teacherSchema);