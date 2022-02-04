const videocontroller =require('../service/video_services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const course_videcontrol = catchAsync(async(req,res)=>{
    const cvd = await videocontroller.videoservice(req.body.course_id);
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const course_videIDcontrol = catchAsync(async(req,res)=>{
    const cvd = await videocontroller.videoserviceId(req.params._id);
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const course_videoCategorycontrol = catchAsync(async(req,res)=>{
    const cvd = await videocontroller.videoCategoryservice(req.params.category_id)
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const course_videoIdCoursecontrol = catchAsync(async(req,res)=>{
    const cvd = await videocontroller.videoIdCourseservice(req.params.course_id)
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const videoSchedulingController = catchAsync(async(req,res)=>{
    const cvd = await videocontroller.videoSchedulingServices();
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const video_read ={
    course_videcontrol,
    course_videIDcontrol,
    course_videoCategorycontrol,
    course_videoIdCoursecontrol,
    videoSchedulingController,
}
module.exports=video_read;