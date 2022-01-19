const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    sent:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    creatdAt:{
        type:Date,
        required:true
    },
    category_id:{
        type:ObjectId,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model('notification',notificationSchema);