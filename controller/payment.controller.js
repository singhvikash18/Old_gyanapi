const paymentServices = require('../service/payment_services');

const httpStatus = require('http-status');

const paymentController = async(req,res)=>{
    const dmo = await paymentServices.paymentservice(req.body.user);
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};
const payment_read ={
    paymentController,
}

module.exports = payment_read;
