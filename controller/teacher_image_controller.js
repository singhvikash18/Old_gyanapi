const teacherImageService = require('../service/teacher_image_services')
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const teacherImageController = catchAsync(async(req,res)=>{
    const dmo = await teacherImageService.teacher_image_service(req.body.roomid);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const teacherImagePostController = catchAsync(async(req,res)=>{
    const dmo = await teacherImageService.teacher_image_service(req);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const teacher_image = {teacherImageController,teacherImagePostController,}

module.exports = teacher_image;