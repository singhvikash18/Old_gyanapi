const router = require('express').Router();

const videorouter = require('../controller/video.controller');

router.get('/video',videorouter.course_videcontrol);

module.exports=router;