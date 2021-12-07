const categorycontroller = require('../service/course_category_services')

const httpStatus = require('http-status');

const courseCategoryControl = async(req,res)=>{
    const cat = await categorycontroller.course_Category();
    const response = cat;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};

const category_read ={
    courseCategoryControl,
}

module.exports = category_read;