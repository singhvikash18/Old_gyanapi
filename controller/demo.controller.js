const democontrol = require('../service/demo_services')

const httpStatus = require('http-status');

const demoController = async(req,res)=>{
    const dmo = await democontrol.demoservice();
    const response = dmo;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};
const demo_read ={
    demoController,
}

module.exports=demo_read;