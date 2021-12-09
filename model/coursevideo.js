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
    videoCourse_id :{
        type:String,
        required:true
    },
    videoLesson :
    {
        type: String,
        required:true
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
    }
},
{
    timestamps:true
}
);

module.exports= mongoose.model('video',videoSchema);