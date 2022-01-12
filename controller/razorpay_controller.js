const razorservice = require('../service/razorPay_services');

const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');


const razorpayController = catchAsync(async(req,res)=>{
    const dmo = await razorservice.razorPayService(req.body);
    const response = dmo;
    const data ={
        itemcount : 6,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const pay_read= {razorpayController,}

module.exports = pay_read;






















// const Razorpay =require('razorpay');
// const uniquID = require('uniqid');
// const dotenv = require('dotenv');
// dotenv.config({path:'./config/config.env'})


// var instance = new Razorpay({
//     key_id: process.env.KEY_ID,
//     key_secret: process.env.KEY_SECRET,
//   });

// exports.createOrder = (req,res)=>{
//     var options = {
//         amount: 50000,  // amount in the smallest currency unit
//         currency: "INR",
//         receipt: uniquID()
//       };
//       instance.orders.create(options, function(err, order) {
//         if(err){
//             return res.status(500).json({
//                 error:err
//             })
//         }
//         res.json(order)
//       });

// }  