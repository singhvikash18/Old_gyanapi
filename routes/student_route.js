const router =require('express').Router();

const studentroute =require('../controller/student_controller');

router.get('/students',studentroute.studentController);

module.exports=router;