const mongoose = require('mongoose')

const mcqSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    }
})