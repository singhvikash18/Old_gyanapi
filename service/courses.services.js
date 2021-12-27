const moment = require('moment');
const { ObjectId } = require('mongodb');
const Courses = require('../model/courses_model')


const courseService = async() =>{
    const cservice = await Courses.find();
    return cservice;
}

const categoryIdService = async (categoryId)=>{
   
    //console.log(req.params.id);
         //   console.log(courseId);
        const cas1 = await Courses.find({category_id:categoryId});
       // console.log(cas1);
        return cas1;
 }

const coursedetailsService = async (courseslug) =>{
    
    const cds = await Courses.findOne({course_slug : courseslug});
    //console.log(cds)
    return cds;
} 

const coursecomingSoonService = async () =>{
    //console.log('hello')
    const todaydate =moment().valueOf();
    //const todaydate =moment().format('MMMM Do YYYY, h:mm:ss a');
    
   // console.log(todaydate);
    const enddate =moment().add(1, 'years').valueOf();
   // const yodate = moment(("2022-02-12 "+" " + "19:00")).valueOf();
  //  console.log(yodate)
    
    const soon = await Courses.find({
        course_live_session_schedule: {
            $gte:todaydate,
            $lt:enddate
        }
    }).sort({course_live_session_schedule:1});
   // console.log(soon)
    return soon;
} 
module.exports ={ courseService , categoryIdService, coursedetailsService, coursecomingSoonService, };