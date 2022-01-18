const { string } = require('joi')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const newmcqSchema = new mongoose.Schema({
    mcqsid:{
        type:mongoose.SchemaTypes.ObjectId, ref:"mcq",
        required:true
    },
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
    }

});
module.exports =mongoose.model('mcq_question',newmcqSchema);