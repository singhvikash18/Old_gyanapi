const router = require('express').Router();

const mcqTable = require('../model/mcq_table');

const mcq = async(req,res)=>{
    const mcqt = await mcqTable.find();
    return mcqt;
}

module.exports ={mcq,}

