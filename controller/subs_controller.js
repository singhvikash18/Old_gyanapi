const subs_service = require('../service/subscription_services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const subsController = async(req,res)=>{
    const test=await subs_service.subsServices();
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
}

const subsCategoryController =catchAsync (async(req,res)=>{
    const test=await subs_service.subsCategoryServices(req.params.category_id);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
})
const read ={subsController,subsCategoryController,}

module.exports = read