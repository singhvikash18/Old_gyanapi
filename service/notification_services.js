const router =require('express').Router();

const notifytable = require('../model/notification_table');

const notifyserives =async(categoryId)=>{
    const ns = await notifytable.find({category_id:categoryId});
    return ns;
}

module.exports = {notifyserives,}