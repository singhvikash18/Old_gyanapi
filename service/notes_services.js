const router = require('express').Router();
const mongoose =require('mongoose')
const notes = require('../model/notes_table');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');


const notesService = async(req,res)=>{
    const ns = await notes.find()
    return ns;
}
const noteCategoryservice = async(categoryid)=>{
    // console.log(userid)
     const ObjectId = mongoose.Types.ObjectId;
     const ps = await notes.aggregate(
         
         [   
            
             
             { 
                 
                  $match : { category_id : ObjectId(categoryid)  }, 
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
                     as : "users_data"
                 }
                
             }
             
         ]
     )
       if (ps == !notes) {
        throw new AppError(httpStatus.BAD_REQUEST, " not found");  }
     else{
         return ps;
     }
 }

module.exports = {notesService,noteCategoryservice,}