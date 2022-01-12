const mailservicecontroller = require('../service/mails.services');
const   mailroutecontroller = require('../routes/index');
const catchAsync = require('./../utils/catch_async');
const httpStatus = require("http-status")
const { response } = require('express');

const controlmail = (req,res)=>{
    const user = mailservicecontroller.sendEmailToAdmin(req, req);
    console.log(user);
    const response = user;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,
        
    };
    res.status(httpStatus.OK).send(data)
};

const mailcontroller ={
    controlmail,
}

module.exports =mailcontroller;
