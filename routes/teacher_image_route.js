const router =require('express').Router();

const teacher_image_controller = require('../controller/teacher_image_controller');

router.get('/getimages',teacher_image_controller.teacherImageController);


router.post('/postimages',teacher_image_controller.teacherImagePostController);

module.exports= router;

