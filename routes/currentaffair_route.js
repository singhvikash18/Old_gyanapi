const router = require('express').Router();
const validate= require("../middleware/validate");
const currentaffairValid = require('../validation/currentaffair.validation');

const caffairsroute = require('../controller/currentaffair.controller');


router.get('/all', validate(currentaffairValid.cavalid),caffairsroute.controlcurrent_affairs)
router.get('/:currentaffair_slug' , validate(currentaffairValid.cavalid),caffairsroute.controlcurrent_affairs_slug)


module.exports = router;