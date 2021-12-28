const router= require('express').Router();

const studentmodel = require('../model/student_model');

const studentservice = async()=>{
    const ss = await studentmodel.find()
    return ss;
}

const studentId = async(student_id)=>{
    const si = await studentmodel.findOne({student_ids: student_id})
    return si;
}

module.exports={studentservice, studentId ,}