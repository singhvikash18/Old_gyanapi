const router = require('express').Router;
const reviewmodel = require('../model/review_table_model');

const reviewservice = async()=>{
    const rs = await reviewmodel.find()
    return rs;
}

module.exports = {reviewservice,};