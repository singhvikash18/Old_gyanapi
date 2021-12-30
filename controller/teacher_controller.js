const teachercontrol =require('../service/teacher/teacher.services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const teachercontroller = catchAsync(async(req,res)=>{
    const dmo = await teachercontrol.teacherServices();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const teachercontrolId = catchAsync(async(req,res)=>{
    const tdi = await teachercontrol.teacherId(req.params.teacher_id);
    const response = tdi;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "data fetched by Id",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const teacherControlUpdate = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teacherupdate(req.body);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher data updated",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

const teacher_read ={teachercontroller,teachercontrolId,teacherControlUpdate}

module.exports=teacher_read;