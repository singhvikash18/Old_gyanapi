const router = require('express').Router();

const videorouter = require('../controller/video.controller');

router.get('/video',videorouter.course_videcontrol);

router.get('/:video_id',videorouter.course_videIDcontrol);


module.exports=router;