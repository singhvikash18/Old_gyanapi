const course_video_pdf_service = require('../service/course_video_pdf_service');
const catchAsync = require('./../utils/catch_async');

const httpStatus = require('http-status');

const course_pdf_Controller = catchAsync(async(req, res) => {

    const cpc = await course_video_pdf_service.course_pdf_Service(req);
    const response = cpc;
    const data = {
        itemcount: 1,
        status_Code: httpStatus.OK,
        message: "succesfully sent",
        data: response
    }
    res.status(httpStatus.OK).send(data)
});



const_read = { course_pdf_Controller, }

module.exports = const_read;