const router = require('express').Router();

const videorouter = require('../controller/video.controller');


router.get('/getschedulevideo',videorouter.videoSchedulingController);



module.exports = router;