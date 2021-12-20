const router = require('express').Router();

const getteacher = require('../controller/teacher_controller');

router.get('/teachers',getteacher.teachercontroller);

module.exports=router;
