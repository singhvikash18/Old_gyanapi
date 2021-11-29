const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    emoClass_named:{
        type:String,
        required:true
    },
    demoClass_video_link:{
        type:String,
        required:true
    },
    demoClass_photo_link:{
        type:String,
        required:true
    },
    demoClass_title:{
        type:String,
        required:true
    },
    demoClass_tutor_name:{
        type:String,
        required:true
    },
    //  demoClass_created_at:{
    //      type: currentTime ,
    //      required:true
    //  }
    

})
module.exports = mongoose.model('Democlasses' , demoSchema)