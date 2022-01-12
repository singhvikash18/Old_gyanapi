const courseController =require('../service/courses.services')
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const controlCourse = catchAsync(async(req,res)=>{
    const test =  await courseController.courseService();
   // console.log(test);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const controlCategoryId = catchAsync(async (req,res)=>{
    //console.log(req.params);
const test1 =  await courseController.categoryIdService(req.params.category_id);
// console.log(test1);
const response = test1;
const data ={
    itemcount : 4,
    status_code : httpStatus.OK,
    message: "successfully sent",
    data: response,

};
res.status(httpStatus.OK).send(data)
});

const controlcoursedetails = catchAsync(async (req,res)=>{
    //console.log(req.params);
const details =  await courseController.coursedetailsService(req.params.course_slug);
// console.log(test1);
const response = details;
const data ={
    itemcount : 2,
    status_code : httpStatus.OK,
    message: "successfully sent",
    data: response,

};
res.status(httpStatus.OK).send(data)
});

const Coursescommingsoon = catchAsync(async (req,res)=>{
    //console.log(req.params);
const soonclass =  await courseController.coursecomingSoonService();
// console.log(test1);
const response = soonclass;
const datas ={
    itemcount : 5,
    status_code : httpStatus.OK,
    message: "successfully sent",
    data: response,

};
res.status(httpStatus.OK).send(datas)
});

const course_read ={
    controlCourse, Coursescommingsoon, controlCategoryId, controlcoursedetails, 
}

module.exports = course_read