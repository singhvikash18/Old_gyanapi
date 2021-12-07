const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    demoId:{
        type:String,
        required:true,
        unique:true
    },
    demoTitle:{
        type:String,
        required:true,
    },
    demoImage:{
        type:String,
        required:true
    },
    demoLesson:{
        type:String,
        required:true
    },
    demoDate:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports =mongoose.model('democlasses',demoSchema);
