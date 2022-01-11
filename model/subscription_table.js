const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const SubsSchema = new mongoose.Schema({
    packageName:{
        type:String,
        required:true
    },
    packageAmount:{
        type:String,
        required:true
    },
    packageDesc :{
        type:String,
        required:true

    },
    packageDuration:
    {
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    updateAt:{
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
module.exports =mongoose.model('subscription',SubsSchema);