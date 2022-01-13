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
        type : Date,
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
    category_id  : {
        type : ObjectId,
        required : true
    },
    duration :{
        type: String,
        required : true
    },
    paymentStartTime :{
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









































// const { ObjectId } = require('mongodb')
// const mongoose =require('mongoose')

// const paymentSchema = new mongoose.Schema ({
//     amount : {
//         type : String,
//         required : true,   
//     },
//     payeeEmail : {
//         type : String,
//         required : true
//     },
//     paymentCreatedTime : {
//         type : Date,
//         required : true
//     },
//     paymentGateway : {
//         type : String,
//         required: true
//     },
//     paymentId : {
//         type : String,
//         required : true
//     },
//     user : {
//         type : ObjectId,
//         required: true
//     },
//     category_id  : {
//         type : ObjectId,
//         required : true
//     },
//     duration :{
//         type: String,
//         required : true
//     },
//     paymentStartTime :{
//         type: Date,
//         required:true
//     },
//     paymentEndTime :{
//         type: Date,
//         required:true
//     },
//     subscriptionid:{
//         type:String,
//         required:true
//     }

    

// },
// {
//     timestamps:true
// }
// );

// module.exports = mongoose.model('payment',paymentSchema);