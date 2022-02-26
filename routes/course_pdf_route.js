const router =require('express').Router();
const pdfcontrol = require('../controller/course_video_pdf_controller');

router.get('/',pdfcontrol.course_pdf_Controller);

module.exports = router;
