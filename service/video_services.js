const router =require('express').Router();
const mongoose =require('mongoose')
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const videomodel = require('../model/coursevideo');

const videoservice = async()=>{
    const vs = await videomodel.find()
    return vs;
}

const videoserviceId = async(videoid)=>{
    const vsi = await videomodel.findOne({_id:videoid})
    if(vsi){
    return vsi;}
    else{
        throw new AppError(httpStatus.BAD_REQUEST, "videoDetials not found");  

    }
}


const videoCategoryservice = async(categoryId)=>{
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await videomodel.aggregate(
        
        [   
           
            
            { 
                
                 $match : { category_id: ObjectId(categoryId)}
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
                    as : "course"
                }
               
         }
            
        ]
    )
        
    return ps;
}


const videoIdCourseservice = async(Id)=>{
    const ObjectId = mongoose.Types.ObjectId;
    const ps = await videomodel.aggregate(
        
        [   
           
            
            { 
                
                 $match : { course_id: ObjectId(Id)}
                 },
           {
            $unwind: "$_id"
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




module.exports={videoservice,videoserviceId,videoCategoryservice,videoIdCourseservice,}