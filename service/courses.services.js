
const Courses = require('../model/courses_model')


const courseService = async() =>{
    const cservice = await Courses.find()
    return cservice;
}

const categoryIdService = async (categoryId)=>{
   
    //console.log(req.params.id);
         //   console.log(courseId);
        const cas1 = await Courses.find({category_id:categoryId});
       // console.log(cas1);
        return cas1;
 }

const coursedetailsService = async (course_slug) =>{
    
    const cds = await Courses.find({course_slug:course_slug});
    console.log(cds)
    return cds;
} 

module.exports ={ courseService , categoryIdService, coursedetailsService };