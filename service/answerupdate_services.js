const router = require('express').Router();
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const answertable = require('../model/answerupdate_table');
const mcqquestion = require('../model/mcq_question_table');
const { isNull } = require('lodash');

const answer = async(userID)=>{
    const ans = await answertable.findOne({userid:userID});
    if(ans){
        return ans;

     }
     else{
        throw new AppError(httpStatus.BAD_REQUEST, " Not found");
     }
    
}
const answerupdate = async(req)=>{
   
   // (req == null)?  new AppError(httpStatus.BAD_REQUEST, " Not found"): "";
   
      req.allanswer.forEach(async(element) => {
      const correctanswer = await mcqquestion.findOne({'_id': element.question})
   
      var au = await answertable.insertMany({question: element.question, answer: element.answer, userid: element.userid, isCorrect: (correctanswer.answer === element.answer)?true:false}
       )

       if(au){
         return au;
         }
         else{
            throw new AppError(httpStatus.BAD_REQUEST, " Not found");
         }
      

          }
      )
          
}
   // const au = await answertable.insertMany(req.answer)
      

module.exports ={answer,answerupdate,}

