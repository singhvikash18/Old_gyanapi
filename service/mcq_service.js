const router = require('express').Router();
const mongoose =require('mongoose')
const mcqTable = require('../model/mcq_table');

const mcq = async(req,res)=>{
    const mcqt = await mcqTable.find();
    return mcqt;
}

const mcqIdServices = async(mcqId)=>{
    
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await mcqTable.aggregate(
        
        [   
           
            
            { 
                
                 $match : { _id: ObjectId(mcqId)}
                 },
           {
            $unwind: "$_id"
           },
            {
                $lookup :
                {
                    from: "mcq_questions",
                    localField : "_id",
                    foreignField : "mcqsid",
                    as : "mcq"
                }
               
            }
            
        ]
    )
        
    return ps;
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

module.exports ={mcq,mcqIdServices,mcqCategoryservice,}

