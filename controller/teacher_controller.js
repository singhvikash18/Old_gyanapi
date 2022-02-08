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
    const tdi = await teachercontrol.teacherId(req.params._id);
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

// post notes_id

const teacherpostNoteController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachernoteServices(req.body.notes_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher notes data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

// get notes_id
const teachergetNoteController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachernoteServices(req.params.notes_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher notes data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

// post mcq_id
const teacherpostMcqController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachermcqServices(req.body.mcq_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher mcq data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

//get mcq_id
const teachergetMcqController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachermcqServices(req.params.mcq_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher mcq data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

// posr syllabus_id
const teacherpostSyllabusController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachersyllabusServices(req.body.syllabus_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher syllabus data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});

//get syllabus_id
const teachergetSyllabusController = catchAsync(async(req,res)=>{
    const tcu = await teachercontrol.teachersyllabusServices(req.params.syllabus_id);
    const response = tcu;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message : "teacher syllabus data ",
        data : response,

    };
    res.status(httpStatus.OK).send(data)
});


const teacher_read ={teachercontroller,
    teachercontrolId,
    teacherControlUpdate,
    teacherpostNoteController,teachergetNoteController,
    teacherpostMcqController,teachergetMcqController,
    teacherpostSyllabusController,teachergetSyllabusController,}

module.exports=teacher_read;