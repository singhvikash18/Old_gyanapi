const router = require('express').Router();

const syllabusroute = require('../controller/syllabus_controller');

router.get('/all',syllabusroute.syllabusController);

router.post('/categoryid',syllabusroute.syllabusCategoryController);

module.exports = router;