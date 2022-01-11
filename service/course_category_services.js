const router = require('express').Router()

const Category = require('../model/course_category_table');

const course_Category = async()=>{
    const c_cat = await Category.find()
    return c_cat;
}


module.exports ={
     course_Category,
};