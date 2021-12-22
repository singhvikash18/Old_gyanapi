const router = require('express').Router();
const teachermodel = require('../model/teacher_model');

const teacherServices = async()=>{
    const ts = await teachermodel.find()
    return ts;
}





module.exports = {teacherServices,}