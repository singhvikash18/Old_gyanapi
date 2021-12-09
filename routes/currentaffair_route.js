const router = require('express').Router();


const caffairsroute = require('../controller/currentaffair.controller');

router.get('/all' , caffairsroute.controlcurrent_affairs)

router.get('/:currentaffair_slug' , caffairsroute.controlcurrent_affairs_slug)

module.exports = router;