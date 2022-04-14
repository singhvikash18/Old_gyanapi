const router =require('express').Router();

const imageController = require('../controller/course_image_controller');


router.post('/getallimages',imageController.course_image_Controller);


module.exports = router;