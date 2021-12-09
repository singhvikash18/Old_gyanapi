const router = require('express').Router();


const caffairsroute = require('../controller/currentaffair.controller');

router.get('/currentaffair/all' , caffairsroute.controlcurrent_affairs)

router.get('/currentaffair/:currentaffair_slug' , caffairsroute.controlcurrent_affairs_slug)

module.exports = router;