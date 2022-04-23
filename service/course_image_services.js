const router = require('express').Router()
const room_image_table = require("../model/room_images_model");
const course_pdf_Table = require('../model/cousre_video_pdf_model');

const course_image_services = async(req)=>{
    const getpdfName = await course_pdf_Table.findOne({roomid:req.body.roomid})
    
    const cis = await room_image_table.find({roomid:req.body.roomid, pdfName:getpdfName.pdfName}).sort({pdfImage:1});
    // console.log(cis)
    if(cis){
        return cis;

     }
     else{
        throw (" Not found");
     }

 }


module.exports = {course_image_services,}