const mongoose = require('mongoose')

const syllabusSchema = new mongoose.Schema({
    syllabus_name :{
        type:String,
        required:true
    },
    syllabus_description :{
        type:String,
        required:true
    },
    syllabus_link :{
        type:String,
        required:true
    },
    course_id :{
        type:String,
        required:true
    },
    createdAt :{
        type:Date,
        required:true
    },
    updatedAt :{
        type:Date,
        required:true
    }

},
{
    timestamps:true
}
);
module.exports =mongoose.model('syllabus',syllabusSchema);