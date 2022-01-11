const router = require('express').Router();

const subs = require('../model/subscription_table');

const subsServices = async(req,res)=>{
    const ss = await subs.find();
    return ss;
}

const subsCategoryServices = async(categoryId)=>{
    const scs = await subs.find({category_id:categoryId}).populate('category');
    return scs;
}

module.exports = {subsServices,subsCategoryServices,}