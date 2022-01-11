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
const rroute = require('./review_route');
const authroute = require('./user_route');
const loginroute = require('./auth_route');
const teacherroute = require('./teacher_route');
const studroute = require('./student_route');
const playroute = require('./videoplay_route');
const paymentroute = require('./payment_route');
const noteroute = require('./notes_route');
const subscriptionroute = require('./subscription_route');
const syllAbusroute = require('./syllabus_route');


router.use('/play',playroute);
router.use('/auth',authroute);

router.use('/authlogin',loginroute);
// router.post('/email_send',getmails.controlmail);

router.use('/notes',noteroute);
router.use('/payment',paymentroute);
router.use('/email',mailroute);
router.use('/currentaffair', currentaffairsroute);

router.use('/syllabus',syllAbusroute);
router.use('/subscription',subscriptionroute);
router.use('/course',croute);
//router.use('/coursedetails',croute);

router.use('/courseCategory',categoryroute);

router.use('/teacherDetails',teacherroute);
router.use('/demodetails',droute);

router.use('/studentdetails',studroute);

router.use('/coursetype',ctype);
router.use('/coursevideo',vroute);

router.use('/reviewtype',rroute);


module.exports =router;
