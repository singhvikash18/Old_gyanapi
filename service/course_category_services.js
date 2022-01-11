const router = require('express').Router()

const Category = require('../model/course_category_table');

const course_Category = async()=>{
    const c_cat = await Category.find()
    return c_cat;
}

const course_cat_idService = async(categoryId)=>{
    const scis = await Category.findOne({_id:categoryId})
    return scis;
}


module.exports ={
     course_Category,
     course_cat_idService,
};