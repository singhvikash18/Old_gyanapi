const router =require('express').Router();

const videomodel = require('../model/coursevideo');

const videoservice = async()=>{
    const vs = await videomodel.find()
    return vs;
}

module.exports={videoservice,}