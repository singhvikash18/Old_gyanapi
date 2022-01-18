const mcqQuestionServices = require('../service/mcq_question_services');

const catchAsync = require('../utils/catch_async');
const httpStatus = require('http-status');

const mcq2Controller = catchAsync(async(req,res)=>{
    const dmo = await mcqQuestionServices.mcq2IdServices(req.params.mcqsid);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const mcq2_read ={mcq2Controller,}

module.exports = mcq2_read;
