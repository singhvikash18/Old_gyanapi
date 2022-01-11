const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    category_id: {
        type:mongoose.SchemaTypes.ObjectId, ref:"coursecategory",
        required:true

    }
    

},
{
    timestamps:true,
    toObject: { getters: true },
    toJSON: { getters: true },
}
);
module.exports =mongoose.model('subscription',SubsSchema);