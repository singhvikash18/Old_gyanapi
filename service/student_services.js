const router= require('express').Router();

const studentmodel = require('../model/student_model');

const studentservice = async()=>{
    const ss = await studentmodel.find()
    return ss;
}

module.exports={studentservice,}