const router = require('express').Router();

const videorouter = require('../controller/video.controller');

router.post('/video',videorouter.course_videcontrol);

router.get('/videoDetails/:_id',videorouter.course_videIDcontrol);
router.get('/courseId/:course_id',videorouter.course_videoIdCoursecontrol);
router.get('/:category_id',videorouter.course_videoCategorycontrol);





module.exports=router;