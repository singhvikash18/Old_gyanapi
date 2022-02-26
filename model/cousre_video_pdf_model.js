const { ObjectId } = require('mongodb');
const mongoose =require('mongoose')

const course_video_pdfSchema = new mongoose.Schema({
    cousrevideopdf_name:{
        type:String,
        required:true
    },
    courseid :{
        type:ObjectId,
        required:true
    },
    videoid:{
        type:ObjectId,
        required:true
            
    },
    coursevideopdf_pathUrl:{
        type:String,
        required:true
    },
    file:{
        type: Buffer,
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
);

module.exports = mongoose.model('coursevideoPdf',course_video_pdfSchema);