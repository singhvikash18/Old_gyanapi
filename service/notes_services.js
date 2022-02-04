const router = require('express').Router();
const mongoose =require('mongoose')
const notes = require('../model/notes_table');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');


const notesService = async(courseId)=>{
    const ns = await notes.find({course_id:courseId})
    return ns;
}

const notesIdService = async(idDetails)=>{
    const idn = await notes.findOne({_id:idDetails});
    return idn;
}



const noteCategoryservice = async(categoryId)=>{
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await notes.aggregate(
        
        [   
           
            
            { 
                // $match : { user : ObjectId(userid),  createdAt: { $lte: new Date(), $gte: new Date(new Date().setDate(new Date().getDate() - "$coursePeriod")) }  },
                 $match : { category_id: ObjectId(categoryId)}
                 },
           {
            $unwind: "$category_id"
           },
            {
                $lookup :
                {
                    from: "courses",
                    localField : "course_id",
                    foreignField : "_id",
                    as : "course"
                }
               
            }
            
        ]
    )
        
    return ps;
}

module.exports = {notesService,notesIdService,noteCategoryservice,}