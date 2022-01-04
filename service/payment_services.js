const router = require('express').Router();
const mongoose =require('mongoose')
const payment = require('../model/payment_model');

const paymentservice = async(userid)=>{
    console.log(userid)
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await payment.aggregate(
        
        [   
           
            
             { $match : { user : ObjectId(userid),  createdAt: { $lte: new Date(), $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }  },
                 
            }, 
           {
            $unwind: "$category_id"
           },
            {
                $lookup :
                {
                    from: "courses",
                    localField : "category_id",
                    foreignField : "category_id",
                    as : "paid_user"
                }
               
            }
            
        ]
    )
        
    return ps;
}
module.exports = {paymentservice,};