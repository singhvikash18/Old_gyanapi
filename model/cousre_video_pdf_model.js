const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const room_images = new mongoose.Schema({

    pdfImage: {
        type: String,
        required: true
    },
    roodid: {
        type: ObjectId,
        required: true
    },
    pdfName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('room_images', room_images);