const courseController =require('../service/courses.services')

const httpStatus = require('http-status');

const controlCourse = async(req,res)=>{
    const test =  await courseController.courseService();
   // console.log(test);
    const response = test;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};

const controlCategoryId = async (req,res)=>{
    //console.log(req.params);
const test1 =  await courseController.categoryIdService(req.params.category_id);
// console.log(test1);
const response = test1;
const data ={
    itemcount : 2,
    status_code : httpStatus.OK,
    message: "successfully sent",
    data: response,

};
res.status(httpStatus.OK).send(data)
};

const controlcoursedetails = async (req,res)=>{
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
};

const course_read ={
    controlCourse,controlCategoryId,controlcoursedetails,
}

module.exports = course_read