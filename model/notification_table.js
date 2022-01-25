const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notification_status:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    user_id:{
        type:ObjectId,
        required:true
    },
    messagetype:{
        type:String,
        required:true
    },
    videoid:{
        type:mongoose.SchemaTypes.ObjectId, ref:"video",
        required:true
    },
    courseid:{
        type:ObjectId,
        required:true
    },
    paymentid:{
        type:ObjectId,
        required:true
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model('notification',notificationSchema);