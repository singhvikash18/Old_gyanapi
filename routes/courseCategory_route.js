const router = require('express').Router();

const courseCategoryroute =require('../controller/course_category.controller');

router.get('/detailsCategory' ,courseCategoryroute.courseCategoryControl);

module.exports = router;