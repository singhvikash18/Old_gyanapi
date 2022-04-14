const router = require('express').Router()
const room_image_table = require("../model/room_images_model");


const course_image_services = async(req)=>{
    const cis = await room_image_table.find({roodid:req.body.roomid, pdfName:req.body.pdfName});
    console.log(cis)
    if(cis){
        return cis;

     }
     else{
        throw ( " Not found");
     }

 }


module.exports = {course_image_services,}