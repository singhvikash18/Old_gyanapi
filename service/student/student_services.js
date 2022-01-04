const router= require('express').Router();

const studentmodel = require('../../model/student_model');
//const type = require('../../model/course_type_model');

const studentservice = async()=>{
    const ss = await studentmodel.find()
    return ss;
}

const studentId = async(studentIdDetails)=>{
   
    const si = await studentmodel.findOne({_id:studentIdDetails})
   
    return si;
}

const studentUpdate = async(req,res)=>{
    const query= {student_id:req.student_id}
    const updatenumber =  {student_mobile: req.student_mobile};
    const su = await studentmodel.findOneAndUpdate(query,updatenumber)
   
}

module.exports={studentservice, studentId , studentUpdate,}