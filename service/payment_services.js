const router = require('express').Router();
const mongoose =require('mongoose')
const payment = require('../model/payment_model');
 const AppError = require('../utils/app_error');
const httpStatus = require('http-status');

const paymentservice = async(userid)=>{
   // console.log(userid)
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await payment.aggregate(
        
        [   
           
            
            { 
                // $match : { user : ObjectId(userid),  createdAt: { $lte: new Date(), $gte: new Date(new Date().setDate(new Date().getDate() - "$coursePeriod")) }  },
                 $match : { user : ObjectId(userid),  paymentEndTime: { $gte: new Date() }, paymentStartTime: { $lte: new Date() }  }, 
            }, 
           {
            $unwind: "$category_id"
           },
            {
                $lookup :
                {
                    from: "coursecategories",
                    localField : "category_id",
                    foreignField : "_id",
                    as : "paid_user"
                }
               
            }
            
        ]
    )
        
    return ps;
}


const paymentStatus = async(userId,categoryId)=>{

    if(!userId && !categoryId){
        throw new AppError(httpStatus.BAD_REQUEST, "Payment not found");  
    }

   const status = await payment.findOne({user:userId,category_id:categoryId}) ;
   if (status) {
    return "payment found"
  }else{
    throw new AppError(httpStatus.BAD_REQUEST, "Payment not found");
  }

}
module.exports = {paymentservice,paymentStatus,};