const mongoose =require('mongoose')

const typeSchema = new mongoose.Schema({
    course_type_id:{
        type:String,
        required:true  
    },
    course_type_name:{
        type:String,
        required:true,
        soon_class: {
            soon_classType:String,
            required:true

        },
        start_class:{
            start_classType:String,
            required:true
        },
        close_class:{
            close_classType:String,
            required:true
        }
    },
    created_at:{
        type:Date,
        required:true
    }


},
{
    timestamps:true
}
);

module.exports = mongoose.model('ClassType',typeSchema)