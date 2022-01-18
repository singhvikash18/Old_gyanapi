const router = require('express').Router();

const mcq2table = require('../model/mcq_question_table');

const mcq2IdServices = async(mcqId)=>{
    const m2id = await mcq2table.find({mcqsid:mcqId}).populate("mcqsid")
    return m2id;
}

module.exports = {mcq2IdServices,}