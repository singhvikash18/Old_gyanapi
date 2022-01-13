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


const razorpayVerifyController = catchAsync(async(req,res)=>{
    const dmo = await razorservice.verifyrazorPayServices(req)
    const response = dmo;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "payment sent successfully ",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});
const pay_read= {razorpayController,razorpayVerifyController}

module.exports = pay_read;





















