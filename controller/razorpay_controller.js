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





















