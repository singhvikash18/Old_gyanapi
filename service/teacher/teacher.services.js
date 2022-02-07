const router = require('express').Router();
const teachermodel = require('../../model/teacher_model');

const teacherServices = async()=>{
    const ts = await teachermodel.find()
    return ts;
}

const teacherId = async(teacher_id)=>{
    const ti = await teachermodel.findOne({_id: teacher_id})
    return ti;
}

const teacherupdate = async(req,res)=>{
    const query = {teacher_id : req.teacher_id}
    const updateteacher = {teacher_bio : req.teacher_bio}
    const tu = await teachermodel.findOneAndUpdate(query,updateteacher);
}

const teachernoteServices = async(courseId)=>{
    const tns = await teachermodel.find({notes_id:courseId}).populate('notes_id')
    return tns;
}





module.exports = {teacherServices,teacherId,teacherupdate,teachernoteServices}