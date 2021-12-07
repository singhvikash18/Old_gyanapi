const courseController =require('../service/courses.services')

const httpStatus = require('http-status');

const controlCourse = async(req,res)=>{
    const test =  await courseController.courseService();
   // console.log(test);
    const response = {test:test};
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};
const course_read ={
    controlCourse,
}

module.exports = course_read