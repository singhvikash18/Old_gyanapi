const reviewcontrol = require('../service/review.services');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require('http-status');

const reviewController = catchAsync(async(req,res)=>{
    const dmo = await reviewcontrol.reviewservice();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});
const review_read ={
    reviewController,
}
module.exports = review_read;