const router = require('express').Router();
const imageController = require('../controller/course_image_controller');



const getteacher = require('../controller/teacher_controller');

router.get('/teachers',getteacher.teachercontroller);

router.get('/:_id',getteacher.teachercontrolId);

router.post('/updateTeacher',getteacher.teacherControlUpdate);

router.post('/postnotes',getteacher.teacherpostNoteController);
router.get("/getnotes/:notes_id",getteacher.teachergetNoteController);

router.post('/postmcq',getteacher.teacherpostMcqController);
router.get('/getmcq/:mcq_id',getteacher.teachergetMcqController);


router.post('/postsyllabus',getteacher.teacherpostSyllabusController);
router.get('/getsyllabus/:syllabus_id',getteacher.teachergetSyllabusController);
router.post('/getallimages',imageController.course_image_Controller);
module.exports=router;
