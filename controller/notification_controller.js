const notifyService= require('../service/notification_services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');


const notificationController = catchAsync(async(req,res)=>{
    const test=await notifyService.notifyserives(req.params.category_id);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const notificationVideoController = catchAsync(async(req,res)=>{
    const test=await notifyService.notificatiVideoService(req.params.videoid)
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const read ={
    notificationController,
    notificationVideoController,
}
module.exports = read