const Razorpay =require('razorpay');
const uniquID = require('uniqid');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');



var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

const razorPayService= async(reqdata)=>{
    var options = {
        amount: (reqdata.amount * 100).toString() ,  // amount in the smallest currency unit
        currency: "INR",
        receipt: uniquID(),
        "notes":{
            "subscriptionid": reqdata.subscriptionid,
                "categoryid": reqdata.categoryid,
        }
      };
      const response = await instance.orders.create(options);
     if(response){
        return response;

     }
     else{
        throw new AppError(httpStatus.BAD_REQUEST, " Not found");
     }
     
}  
//exports.createOrder 
module.exports={razorPayService,}