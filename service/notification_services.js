const router =require('express').Router();

const notifytable = require('../model/notification_table');

// const notifyserives =async(userId)=>{
//     const ns = await notifytable.find({user_id:userId});
//     if(ns){
//         return ns;}
//         else{
//             throw new AppError(httpStatus.BAD_REQUEST, "videoDetials not found");  
    
//         }
// }

const notificatiVideoService = async(notifyid)=>{
    const nvs = await notifytable.findOne({user_id:notifyid}).populate("videoid");
   if(nvs){
    return nvs;
   }
   else{
    throw new AppError(httpStatus.BAD_REQUEST, "notificationDetials not found");  
   }
}

module.exports = {notificatiVideoService,}