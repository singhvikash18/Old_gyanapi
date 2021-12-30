const router = require('express').Router();

const getteacher = require('../controller/teacher_controller');

router.get('/teachers',getteacher.teachercontroller);

router.get('/:teacher_id',getteacher.teachercontrolId);

router.post('/updateTeacher',getteacher.teacherControlUpdate);

module.exports=router;
