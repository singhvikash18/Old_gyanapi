const { ObjectId } = require('mongodb');
const mongoose =require('mongoose')

const videoSchema = new mongoose.Schema({
    video_id :{
        type:String,
        required:true,
        unique:true
    },
    video_title :{
        type:String,
        required:true
    },
    
    course_id :{
        type:mongoose.SchemaTypes.ObjectId, ref:"Courses",
        required:true
    },
    videoLesson :
    {
        type: String,
        required:true
    },
    videoName :
    {
        type : String,
        required : true
    },
    videoDuration :
    {
        type: String,
        required:true
    },
    videoLink :
    {
        type: String,
        required: true
    },
    videoPdf :
    {
        type: String,
        required: true
    },
    videocreated_at :
    { 
        type: String,
        required:true
    },
    videoDate :
    {
        type : String,
        required:true
    },
    liveVideo:{
        type:Number,
        required:true
    },
    recordedVideo:{
        type:Number,
        required:true
    },
    category_id:{
        type:mongoose.SchemaTypes.ObjectId, ref:"Courses",
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    videosummary:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    handleclass:{
        type:Number,
        required:true
    }
    
},
{
    timestamps:true
}
);

module.exports= mongoose.model('video',videoSchema);