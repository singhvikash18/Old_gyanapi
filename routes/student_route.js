const router =require('express').Router();

const studentroute =require('../controller/student_controller');

router.get('/students',studentroute.studentController);

router.get('/:_id',studentroute.studentControllerId);

router.post('/studentupdate',studentroute.studentContolupdate);

module.exports=router;