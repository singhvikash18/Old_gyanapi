const { ObjectId } = require('mongodb');
const mongoose =require('mongoose')

const answerupdateSchema = new mongoose.Schema({
    userid:{
        type:ObjectId,
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
        type:Boolean,
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