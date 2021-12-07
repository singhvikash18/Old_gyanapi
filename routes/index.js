const router = require('express').Router();
//const currentvalid = require('../validation/currentaffair.validation');
const getmails = require('../controller/mail.controller');

const demoroute =require('../controller/demo.controller');
const caffairsroute = require('../controller/currentaffair.controller');
const courseroute = require('../controller/courses.controller');
const courseCategoryroute =require('../controller/course_category.controller');
const courseTyperoute = require('../controller/course_type.controller');


router.post('/email_send',getmails.controlmail);


router.get('/currentaffair/all' , caffairsroute.controlcurrent_affairs)
// router.use('/currentaffair', caffairs.controlcurrent_affairs);
router.get('/currentaffair/:currentaffair_slug' , caffairsroute.controlcurrent_affairs_slug)

router.get('/courses', courseroute.controlCourse)

router.get('/courseCategory' ,courseCategoryroute.courseCategoryControl)

router.get('/courseType',courseTyperoute.coursetypeController)
 router.get('/demo',demoroute.demoController)
module.exports =router;
