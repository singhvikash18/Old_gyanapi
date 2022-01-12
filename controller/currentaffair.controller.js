const currentaffairservices = require('../service/currentaffair.services');
const catchAsync = require('../utils/catch_async');

const httpStatus = require('http-status');

const controlcurrent_affairs = catchAsync(async(req,res)=>{
   // console.log('asdfasdfasdfads')
    const test =  await currentaffairservices.caservices();
   // console.log(test);
    const response = test;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});



const controlcurrent_affairs_slug = catchAsync(async(req,res)=>{
        //console.log(req.params);
    const test1 =  await currentaffairservices.caslug(req.params.currentaffair_slug);
    //console.log(test1);
    const response = test1;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const controlcurrent = {
    controlcurrent_affairs, controlcurrent_affairs_slug,
}
module.exports = controlcurrent
