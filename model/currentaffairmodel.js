const { Int32 } = require('bson')
const { text } = require('express')
const mongoose = require('mongoose')

const currentaffairSchema = new mongoose.Schema({
    currentaffair_id:{
        type:String ,
        required:true,
        unique:true
    },
    currentaffair_title:{
        type:String,
        required:true
    },
    currentaffair_description:{
        type:String,
        required:true
    },
    currentaffair_image:{
        type:String,
        required:true
    },
    currentaffair_created_at:{
        type:Date,
        required:true
    },
    currentaffair_slug:{
        type:String,
        required:true,
        unique:true
    },
    currentaffair_summary:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('CurrentAffair', currentaffairSchema)