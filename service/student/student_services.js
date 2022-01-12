const router= require('express').Router();

const studentmodel = require('../../model/student_model');

//const AppError = require('../utils/app_error');
const studentservice = async()=>{
    const ss = await studentmodel.find()
    // if(ss ==0){
    //     throw new AppError(httpStatus.BAD_REQUEST, "Students not found");
    // }
   
    return ss;
}

const studentId = async(studentIdDetails)=>{
   
    const si = await studentmodel.findOne({_id:studentIdDetails})
    // if(si ==0){
    //     throw new AppError(httpStatus.BAD_REQUEST, "Student not found");
    // }
   
    return si;
}

const studentUpdate = async(req,res)=>{
    const query= {student_id:req.student_id}
    const updatenumber =  {student_mobile: req.student_mobile};
    const su = await studentmodel.findOneAndUpdate(query,updatenumber)
    // if(su ==0){
    //     throw new AppError(httpStatus.BAD_REQUEST, "Student not update");
    // }
   
   
}

module.exports={studentservice, studentId , studentUpdate,}