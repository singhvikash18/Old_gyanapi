const course_pdf_Table = require('../model/cousre_video_pdf_model');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');

const course_pdf_Service = async()=>{
    const cps = await course_pdf_Table.find()
    if(cps){
        return cps;
    }
    else{
        throw new AppError(httpStatus.BAD_REQUEST, "course_Pdf not found");  
    }

}

module.exports = {course_pdf_Service,}