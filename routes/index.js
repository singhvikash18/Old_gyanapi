const router = require('express').Router();
//const currentvalid = require('../validation/currentaffair.validation');
// const getmails = require('../controller/mail.controller');
const categoryroute = require('./courseCategory_route');
const droute =require('./demo_route');
const currentaffairsroute = require('./currentaffair_route');
const croute = require('./course_route');
const mailroute=require('./email_route');
const ctype = require('./type_route');
const vroute =require('./video_route');


// router.post('/email_send',getmails.controlmail);

 
router.use('/email',mailroute);
router.use('/currentaffair', currentaffairsroute);

router.use('/course',croute);

router.use('/courseCategory',categoryroute);

router.use('/demodetails',droute);

router.use('/coursetype',ctype);
router.use('/coursevideo',vroute);


module.exports =router;
