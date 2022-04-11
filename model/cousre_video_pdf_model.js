const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const course_video_pdfSchema = new mongoose.Schema({

    courseid: {
        type: ObjectId,
        required: true
    },
    videoid: {
        type: ObjectId,
        required: true

    },
    coursevideopdf_pathUrl: {
        type: String,
        required: true
    },
    pdfName: {
        type: String,
        required: true
    },
    roomid: {
        type: ObjectId,
        required: true
    },
    pdf_increment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('coursevideoPdf', course_video_pdfSchema);