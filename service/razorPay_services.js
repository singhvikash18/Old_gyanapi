const Razorpay =require('razorpay');
const uniquID = require('uniqid');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const crypto = require("crypto");
const paymentData = require('../model/payment_model');
const moment = require('moment');


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
                "userid": reqdata.userid,
                "packageDuration": reqdata.packageDuration,
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
const verifyrazorPayServices =async(req,res)=>{
    const {order_id, payment_id} = req.body;  
    console.log(req.body)   
    const razorpay_signature =  req.headers['x-razorpay-signature'];
  
    
    const key_secret = process.env.KEY_SECRET;     
 
    let hmac = crypto.createHmac('sha256', key_secret); 
  
   
    hmac.update(order_id + "|" + payment_id);
      
    
    const generated_signature = hmac.digest('hex');
      
      
    if(razorpay_signature===generated_signature){

        const paymentdetail =instance.payments.fetch(payment_id)
        //console.log(paymentdetail)

        const paymentall = {
            amount:paymentdetail.amount,
            payeeEmail:paymentdetail.email, 
            paymentCreatedTime:new Date(), 
            paymentGateway: "razorpay"+paymentdetail.status,
            paymentId: paymentdetail.id, 
            user:paymentdetail.notes.userid, 
            category_id:paymentdetail.notes.categoryid, 
            duration:paymentdetail.notes.packageDuration,
            paymentStartTime:new Date(), 
            paymentEndTime:moment().add(paymentdetail.notes.packageDuration, 'days')
        }
        console.log(paymentall)

        //insert query
        // paymentdetail.insertMany(paymentall(function (obj) {
        //     return obj
        //   }))
            
          const paymenttable = await paymentData.create(paymentall);
        return paymenttable;
    }
    else{
    return "Payment verification failed";
};

}



//exports.createOrder 
module.exports={razorPayService,verifyrazorPayServices}