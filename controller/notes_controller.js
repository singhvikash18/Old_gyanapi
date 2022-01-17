const notesService= require('../service/notes_services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const notesController = catchAsync(async(req,res)=>{
    const test=await notesService.notesService();
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const notesIdController = catchAsync(async(req,res)=>{
    const test=await notesService.notesIdService(req.params._id);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const notesCategoryController = catchAsync(async(req,res)=>{
    const test=await notesService.noteCategoryservice(req.body.category_id);
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});


const read ={
    notesController,
    notesIdController,
    notesCategoryController,
}
module.exports = read