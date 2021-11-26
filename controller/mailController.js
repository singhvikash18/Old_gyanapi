const mailservicecontroller = require('../service/mail');
const   mailroutecontroller = require('../routes/index');
const httpStatus = require("http-status")
const { response } = require('express');

const controlmail = async (req,res)=>{
    const user = await mailservicecontroller.servicemail(req.body.html);
    console.log("sdsds");
    const response = {user:user};
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
