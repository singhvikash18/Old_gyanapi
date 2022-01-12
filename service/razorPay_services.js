const Razorpay =require('razorpay');
const uniquID = require('uniqid');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})



var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

const razorPayService= (req,res)=>{
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: uniquID(),
        "notes":{
            "subscriptionid": req.body.subscriptionid,
                "categoryid": req.body.categoryid,
        }
      };
      instance.orders.create(options, function(err, order) {
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        res.json(order)
      });

}  
//exports.createOrder 
module.exports={razorPayService,}