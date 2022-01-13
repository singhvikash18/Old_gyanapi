const Razorpay =require('razorpay');
const uniquID = require('uniqid');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const crypto = require("crypto");



var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

const razorPayService= async(reqdata)=>{
    var options = {
        amount: (reqdata.amount * 100).toString() ,  // amount in the smallest currency unit
        payment_capture:1,
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
const verifyrazorPayServices =(req,res)=>{
    const {order_id, payment_id} = req.body;  
    console.log(req.body)   
    const razorpay_signature =  req.headers['x-razorpay-signature'];
  
    
    const key_secret = process.env.KEY_SECRET;     
 
    let hmac = crypto.createHmac('sha256', key_secret); 
  
   
    hmac.update(order_id + "|" + payment_id);
      
    
    const generated_signature = hmac.digest('hex');
      
      
    if(razorpay_signature===generated_signature){
        return "Payment has been verified";
    }
    else{
    return "Payment verification failed";
};

}



//exports.createOrder 
module.exports={razorPayService,verifyrazorPayServices}