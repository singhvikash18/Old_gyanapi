const router = require('express').Router();

const roomTable = require('../model/room_tabe');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');

const roomServices = async(videoId)=>{
    const rs = await roomTable.findOne({roomid:videoId})
    if(rs){
        return rs;
    }
    else{
        throw new AppError(httpStatus.BAD_REQUEST, "room not found");
       
    }
}

module.exports = {roomServices,}