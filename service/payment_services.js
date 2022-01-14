const router = require('express').Router();
const mongoose =require('mongoose')
const payment = require('../model/payment_model');
const pay = require('../model/payment_model');
 const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const { duration } = require('moment');

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


// const start = new Date("06/30/2019")
// const end = new Date("07/30/2019")
// const diffTime = end- start;
// const diffDays = diffTime/(1000 * 3600 * 24);
 

const paymentStatus = async(userid,categoryId)=>{

    
    if(!userid && !categoryId){
        throw new AppError(httpStatus.BAD_REQUEST, "Payment not found");  
        
    }else
       { const ObjectId = mongoose.Types.ObjectId;    
    const diff = await payment.aggregate([
        {
        /** Filter out docs */
        $match : { user : ObjectId(userid),category_id:ObjectId(categoryId),  paymentEndTime: { $gte: new Date() }, paymentStartTime: { $lte: new Date() }  },
       
         } 
      ]);
      if(diff==!payment){
        throw new AppError(httpStatus.BAD_REQUEST, " not found");  
        
      }
      return diff ;
      
    }

//    const status = await payment.findOne({user:userId,category_id:categoryId}) ;
//    if (status) {
//     return "payment found"
//   }else{
//     throw new AppError(httpStatus.BAD_REQUEST, "Payment not found");
//   }

}
module.exports = {paymentservice,paymentStatus,};