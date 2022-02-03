const router = require('express').Router();

const roomTable = require('../model/room_tabe');
const chatTable = require('../model/chat_table');
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

const chatServices = async(roomID)=>{
    const cs = await chatTable.find({roomid:roomID})
    if(cs){
        return cs;
    }
    else{
        throw new AppError(httpStatus.BAD_REQUEST, "chat not found");
    }
}

const chatPostServices = async(message)=>{
    const cps = await chatTable.create(message);
    return cps;
}
module.exports = {roomServices,chatServices,chatPostServices,}