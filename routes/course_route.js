const router = require('express').Router();

const courseroute = require('../controller/courses.controller');


router.get('/all', courseroute.controlCourse)

router.get('/:category_id',courseroute.controlCategoryId)

router.get('/:course_slug', courseroute.controlcoursedetails)

module.exports = router;