const studentcontrol = require('../service/student_services');

const httpStatus = require('http-status');

const studentController = async(req,res)=>{
    const dmo = await studentcontrol.studentservice();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};

const student_read ={studentController,}

module.exports=student_read;