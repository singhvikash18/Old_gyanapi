const router = require('express').Router();

const courseTyperoute = require('../controller/course_type.controller');

router.get('/type',courseTyperoute.coursetypeController);

module.exports=router;