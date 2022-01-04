const studentcontrol = require('../service/student/student_services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const studentController = catchAsync(async(req,res)=>{
    const dmo = await studentcontrol.studentservice();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const studentControllerId = catchAsync(async(req,res)=>{
    const dmo = await studentcontrol.studentId(req.params._id);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const studentContolupdate = catchAsync(async(req,res)=>{
    const upd = await studentcontrol.studentUpdate(req.body);
    const response =upd;
    const data = {
        itemcount:1,
        status_code : httpStatus.OK,
        message: "student data updated",
        data :response,
    };
    res.status(httpStatus.OK).send(data)
});


const student_read ={studentController,studentControllerId,studentContolupdate,}

module.exports=student_read;