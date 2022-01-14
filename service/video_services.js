const router =require('express').Router();
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const videomodel = require('../model/coursevideo');

const videoservice = async()=>{
    const vs = await videomodel.find()
    return vs;
}

const videoserviceId = async(videoid)=>{
    const vsi = await videomodel.findOne({_id:videoid})
    if(vsi){
    return vsi;}
    else{
        throw new AppError(httpStatus.BAD_REQUEST, "videoDetials not found");  

    }
}

module.exports={videoservice,videoserviceId,}