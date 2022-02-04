const router = require('express').Router();

const syllabusroute = require('../controller/syllabus_controller');

router.post('/getbycourse',syllabusroute.syllabusController);

router.get('/:_id',syllabusroute.syllabusIdController);

router.post('/categoryid',syllabusroute.syllabusCategoryController);

module.exports = router;