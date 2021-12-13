const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review_id :
    {
        type:String,
        required:true,
        unique:true
    },
    review_name :
    {
        type:String,
        required:true
    },
    review_image_link :
    {
        type:String,
        required:true
    },
    review_description :
    {
        type:String,
        required:true
    },
    review_position:
    {
        type:String,
        required:true
    },
    created_at:
    {
        type:Date,
        required:true
    }

})
module.exports = mongoose.model('review',reviewSchema);