const router =require('express').Router();

const notifytable = require('../model/notification_table');

const notifyserives =async(categoryId)=>{
    const ns = await notifytable.find({category_id:categoryId});
    return ns;
}

const notificatiVideoService = async(notifyid)=>{
    const nvs = await notifytable.findOne({_id:notifyid}).populate("videoid");
    return nvs;

}

module.exports = {notifyserives,}