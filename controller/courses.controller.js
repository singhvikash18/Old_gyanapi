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

const controlCourseId = async(req,res)=>{
    //console.log(req.params);
const test1 =  await courseController.courseService(req.params.course_id) ;
console.log(test1);
const response = test1;
const data ={
    itemcount : 2,
    status_code : httpStatus.OK,
    message: "successfully sent",
    data: response,

};
res.status(httpStatus.OK).send(data)
};

const course_read ={
    controlCourse,controlCourseId,
}

module.exports = course_read