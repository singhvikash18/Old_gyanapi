const router = require('express').Router();

const syllabusroute = require('../controller/syllabus_controller');

router.get('/all',syllabusroute.syllabusController);

module.exports = router;