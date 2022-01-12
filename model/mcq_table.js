const mongoose = require('mongoose')

const mcqSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    option_1:{
        type:String,
        required:true
    },
    option_2:{
        type:String,
        required:true
    },
    option_3:{
        type:String,
        required:true
    },
    option_4:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    course_id:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    updatedAt:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

module.exports =mongoose.model('mcq',mcqSchema);