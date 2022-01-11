const router = require('express').Router();

const subs = require('../model/subscription_table');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const subsServices = async(req,res)=>{
    const ss = await subs.find();
    return ss;
}

const subsCategoryServices = async(categoryId)=>{
    console.log(categoryId)
    // const ObjectId = mongoose.Types.ObjectId;
    try{
    const scs = await subs.find({category_id:categoryId}).populate("category_id")
    }
    catch(err){
        throw new AppError(httpStatus.BAD_REQUEST, "subs not found");
    }
    return scs;
}

module.exports = {subsServices,subsCategoryServices,}