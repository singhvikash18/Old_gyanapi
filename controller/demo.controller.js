const democontrol = require('../service/demo_services')
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const demoController = catchAsync(async(req,res)=>{
    const dmo = await democontrol.demoservice();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const demoControllerId = catchAsync(async(req,res)=>{
    const dmi = await democontrol.demodetailId(req.params.demoId);
    const response = dmi;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});
const demo_read ={
    demoController,
    demoControllerId,
}

module.exports=demo_read;