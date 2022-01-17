const router = require('express').Router();
const mongoose =require('mongoose')
const syllabus = require('../model/syllabus_table');

const syllabusService = async(req,res)=>{
    const ns = await syllabus.find();
    return ns;
}


const syllabusCategoryservice = async(categoryId)=>{
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await syllabus.aggregate(
        
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

module.exports = {syllabusService,syllabusCategoryservice,}