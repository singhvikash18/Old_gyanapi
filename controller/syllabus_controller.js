const syllabusservices = require('../service/syllabus_service');

const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const syllabusController = catchAsync(async(req,res)=>{
    const test=await syllabusservices.syllabusService();
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const syllabusCategoryController = catchAsync(async(req,res)=>{
    const test=await syllabusservices.syllabusCategoryservice(req.body.category_id);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});
const service_read ={syllabusController,syllabusCategoryController,}

module.exports = service_read;