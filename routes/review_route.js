const router =require('express').Router();

const getreview = require('../controller/review.controller');

router.get('/review',getreview.reviewController);

module.exports= router;