const roomservices = require('../service/room_services');

const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const roomSerivceController = catchAsync(async(req,res)=>{
    const test=await roomservices.roomServices(req.params.roomid);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const read = {roomSerivceController,}

module.exports=read;
