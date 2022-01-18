const mcqServices = require('../service/mcq_service');

const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const mcqController = catchAsync(async(req,res)=>{
    const dmo = await mcqServices.mcq();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const mcqIdController = catchAsync(async(req,res)=>{
    const dmo = await mcqServices.mcqIdServices(req.params._id);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const mcqCategoryController = catchAsync(async(req,res)=>{
    const dmo = await mcqServices.mcqCategoryservice(req.body.category_id);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const mcqRead ={mcqController,mcqIdController,mcqCategoryController}

module.exports = mcqRead;