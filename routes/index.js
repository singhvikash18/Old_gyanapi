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
const razorroute = require('./razorPay_route');
const mcqroute = require('./mcq_routes');
const newmcqroute = require('./mcq_question_route');
const ansroute = require('./answer_route');
const notifyroute = require('./notification_route');
const roomroute = require('./room_route');
const coursePdfroute = require('./course_pdf_route');
const teacherImage = require('./teacher_image_route');
const teacherVideo = require('./teacher_video_route');
const teacher = require('./teacher_route');




router.use('/razorpay',razorroute);
router.use('/play',playroute);
router.use('/auth',authroute);
router.use('/teacher/videoPdfUpload',coursePdfroute);

router.use('/teacher',teacherImage);
router.use('/teacher',teacher);
router.use('/messages',roomroute);
// router.use('student/mcq',ansroute);
router.use('/student/mcq',mcqroute);
router.use('/student/mcq_question',newmcqroute);
router.use('/authlogin',loginroute);
// router.post('/email_send',getmails.controlmail);

router.use('/student/notes',noteroute);
router.use('/payment',paymentroute);
router.use('/email',mailroute);
router.use('/currentaffair', currentaffairsroute);

router.use('/student/syllabus',syllAbusroute);
router.use('/subscription',subscriptionroute);
router.use('/course',croute);
//router.use('/coursedetails',croute);

router.use('/courseCategory',categoryroute);
router.use('/notification',notifyroute);
router.use('/teacher',teacherroute);
router.use('/demodetails',droute);

router.use('/studentdetails',studroute);

router.use('/coursetype',ctype);
router.use('/student/coursevideo',vroute);
router.use('/teacher/video',teacherVideo);

router.use('/reviewtype',rroute);


module.exports =router;
