const mongoose =require('mongoose')

const answerupdateSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    isCorrect:{
        type:String,
        required:true
    },
    updatedAt:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }
},
{
 timestamps:true
});

module.exports=mongoose.model('answerUpdate',answerupdateSchema);