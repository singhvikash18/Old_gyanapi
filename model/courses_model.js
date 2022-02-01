
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    course_id : {
       type : String,
       required : true,
       unique: true
    },
    course_name : {
        type: String,
        required : true
    },
    coursetype :{
        type: String,
        required: true
    },
    course_image :{
        type: String,
        required : true
    },
    course_description: {
        type : String,
        required : true
     },
     course_aditional_description: {
         type: String,
         required : true
     },
     course_schedule_time :{
         type: Date,
         required: true
     },
     course_laungauge:{
         type: String,
         required : true
     },
     course_topic: {
        type : String,
        required : true
 
     },
     course_target_exam: {
         type: String,
         required : true
     },
     course_review_video :{
         type: String,
         required: true
     },
     course_live_session_title :{
         type: String,
         required : true
     },
     course_live_session_schedule : {
         type : String,
         required : true
  
      },
      course_live_session_duration: {
        type : String,
        required : true
 
     },
     course_written_laungauge : {
         type: String,
         required : true
     },
     course_goal:{
         type: String,
         required: true
     },
     category_id :{
         type: ObjectId,
         required : true
     },
     teacher_id: {
         type : ObjectId,
         required : true
  
      },
      course_paid_free: {
          type: String,
          required : true
      },
      course_payment_id :{
          type: String,
          required: true
      },
      created_at: {
        type: Date,
        required : true
    },
    updated_at: {
        type: String,
        required: true
    },
    course_slug:
    {
        type:String,
        required:true
    },
    enroll:
    {
        type:String,
        required:true
    }

},
{
    timestamps:true
}

);
module.exports = mongoose.model('Courses', coursesSchema);