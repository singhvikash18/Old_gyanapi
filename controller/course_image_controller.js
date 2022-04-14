const course_image_service = require('../service/course_image_services');
const catchAsync = require('./../utils/catch_async');

const httpStatus = require('http-status');

const course_image_Controller = catchAsync(async(req, res) => {

    const cpc = await course_image_service.course_image_services(req);
    const response = cpc;
    const data = {
        itemcount: 1,
        status_Code: httpStatus.OK,
        message: "succesfully sent",
        data: response
    }
    res.status(httpStatus.OK).send(data)
});



const_read = { course_image_Controller, }

module.exports = const_read;