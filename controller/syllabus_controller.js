const syllabusservices = require('../service/syllabus_service');


const httpStatus = require('http-status');

const syllabusController = async(req,res)=>{
    const test=await syllabusservices.syllabusService();
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
}
const service_read ={syllabusController,}

module.exports = service_read;