const answerService = require('../service/answerupdate_services');

const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const answerController = catchAsync(async(req,res)=>{
    const dmo = await answerService.answer(req.params.userid);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});
const ansRead ={answerController,}

module.exports = ansRead;