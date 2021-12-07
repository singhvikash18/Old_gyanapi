const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    course_category_id : {
        type:String,
        required:true

    },

    course_category_name : {
        type : String,
        required : true
    },
    course_category_image:{
        type:String,
        required:true
    },

    course_created_at : {
        type : Date,
        required : true
    }
})

module.exports = mongoose.model( 'coursecategory' , categorySchema );