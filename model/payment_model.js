const { ObjectId } = require('mongodb')
const mongoose =require('mongoose')

const paymentSchema = new mongoose.Schema ({
    amount : {
        type : String,
        required : true,   
    },
    payeeEmail : {
        type : String,
        required : true
    },
    paymentCreatedTime : {
        type : String,
        required : true
    },
    paymentGateway : {
        type : String,
        required: true
    },
    paymentId : {
        type : String,
        required : true
    },
    user : {
        type : ObjectId,
        required: true
    },
    createdAt : {
        type : Date,
        required: true
    },
    updatedAt : {
        type : Date,
        required : true
    },
    category_id  : {
        type : ObjectId,
        required : true
    },
    duration :{
        type: String,
        required : true
    },
    payentStartTime :{
        type: Date,
        required:true
    },
    paymentEndTime :{
        type: Date,
        required:true
    }

    

},
{
    timestamps:true
}
);

module.exports = mongoose.model('payment',paymentSchema);