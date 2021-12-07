const router = require('express').Router()
const Type = require('../model/course_type_model')

const typeService = async ()=>{
    const ct = await Type.find()
    return ct;
}
module.exports = {typeService,};