const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    notes_name :{
        type:String,
        required:true
    },
    notes_description :{
        type:String,
        required:true
    },
    notes_link :{
        type:String,
        required:true
    },
    course_id :{
        type:mongoose.SchemaTypes.ObjectId, ref:"Courses",
        required:true
    },
    createdAt :{
        type:Date,
        required:true
    },
    updatedAt :{
        type:Date,
        required:true
    },
    category_id:{
        type:ObjectId,
        required:true
    }

},
{
    timestamps:true
}
);
module.exports =mongoose.model('notes',notesSchema);