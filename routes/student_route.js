const router =require('express').Router();

const studentroute =require('../controller/student_controller');

router.get('/students',studentroute.studentController);

router.get('/:student_id',studentroute.studentController);

router.post('/studentupdate',studentroute.studentContolupdate);

module.exports=router;