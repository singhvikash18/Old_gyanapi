const router = require('express').Router();
const AppError = require('../../utils/app_error');
const httpStatus = require('http-status');
const teachermodel = require('../../model/teacher_model');
const { isNull, isEmpty } = require('lodash');

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
    if(tns == ""){
        throw new AppError(httpStatus.BAD_REQUEST, "notes not found");
    }
    else{
        return tns;
    }
}

const teachermcqServices = async(mcqId)=>{
    const tms = await teachermodel.find({mcq_id:mcqId}).populate('mcq_id');
    if(tms == ""){
        throw new AppError(httpStatus.BAD_REQUEST, "mcq not found");
    }
    else{
        return tms;
    }
    
}

const teachersyllabusServices = async(syllabusId)=>{
    const tss = await teachermodel.find({syllabus_id:syllabusId}).populate('syllabus_id')
    if(tss == ""){
        throw new AppError(httpStatus.BAD_REQUEST,"syllabus not found");
    }
    else 
    {
        return tss
    }
}






module.exports = {teacherServices,
                        teacherId,
                    teacherupdate,
              teachernoteServices,
               teachermcqServices,
          teachersyllabusServices,}