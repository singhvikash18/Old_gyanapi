const router = require('express').Router();
const mongoose =require('mongoose')
const mcqTable = require('../model/mcq_table');

const mcq = async(req,res)=>{
    const mcqt = await mcqTable.find();
    return mcqt;
}

const mcqCategoryservice = async(categoryId)=>{
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await mcqTable.aggregate(
        
        [   
           
            
            { 
                
                 $match : { category_id: ObjectId(categoryId)}
                 },
        //    {
        //     $unwind: "$category_id"
        //    },
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

module.exports ={mcq,mcqCategoryservice,}

