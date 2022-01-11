const router = require('express').Router();

const syllabus = require('../model/syllabus_table');

const syllabusService = async(req,res)=>{
    const ns = await syllabus.find().populate().exec();
    return ns;
}

module.exports = {syllabusService,}