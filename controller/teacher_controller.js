const teachercontrol =require('../service/teacher.services');

const httpStatus = require('http-status');

const teachercontroller = async(req,res)=>{
    const dmo = await teachercontrol.teacherServices();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};

const teacher_read ={teachercontroller,}

module.exports=teacher_read;