const router = require('express').Router()
const democlass = require('../model/democlass_model');

const demoservice = async()=>{
    const ms = await democlass.find()
    return ms;
}

const demodetailId = async(demoIdDetails)=>{
    const ddi = await democlass.findOne({_id:demoIdDetails})
    return ddi;
}

module.exports={demoservice,demodetailId};