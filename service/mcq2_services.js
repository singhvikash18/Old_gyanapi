const router = require('express').Router();

const mcq2table = require('../model/mcq_table2');

const mcq2IdServices = async(req,res)=>{
    const m2id = await mcq2table.find();
    return m2id;
}

module.exports = {mcq2IdServices,}