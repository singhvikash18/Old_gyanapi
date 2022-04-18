const router = require('express').Router()

const teacher_image_table = require('../model/teacher_image_tables');

const teacher_image_service = async (req,res)=>{
    const tis = await teacher_image_table.find()
    return tis;
}

const teacher_image_post_service = async (req)=>{
    const tips = await teacher_image_table.find({roomid:req.body.roomid})
    return tips;
}

module.exports = {teacher_image_service,teacher_image_post_service,}