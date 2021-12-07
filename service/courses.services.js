const router = require('express').Router()

const Courses = require('../model/courses_model')


const courseService = async() =>{
    const cservice = await Courses.find()
    return cservice;
}
module.exports ={ courseService,};