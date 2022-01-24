const router = require('express').Router();
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const answertable = require('../model/answerupdate_table');

const answer = async(userID)=>{
    const ans = await answertable.findOne({userid:userID});
    if(ans){
        return ans;

     }
     else{
        throw new AppError(httpStatus.BAD_REQUEST, " Not found");
     }
    
}
const answerupdate = async(req,res)=>{
   const query ={userid : req.userid} ;
   const updatequery = {answer : req.answer};
   const au = await answertable.findOneAndUpdate(query,updatequery);
   return au;
}

module.exports ={answer,answerupdate,}

