const router =require('express').Router();

const videomodel = require('../model/coursevideo');

const videoservice = async()=>{
    const vs = await videomodel.find()
    return vs;
}

const videoserviceId = async(videoById)=>{
    const vsi = await videomodel.findOne({video_id:videoById})
    return vsi;
}

module.exports={videoservice,videoserviceId,}