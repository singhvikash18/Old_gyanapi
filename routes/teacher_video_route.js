const router = require('express').Router();

const videorouter = require('../controller/video.controller');


router.get('/postschedulevideo',videorouter.videoSchedulingController);

module.exports = router;