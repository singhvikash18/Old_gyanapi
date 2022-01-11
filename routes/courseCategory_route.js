const router = require('express').Router();
const validate = require('../middleware/validate');
const categoryValidation = require('../validation/coursecategory.validation');
const courseCategoryroute =require('../controller/course_category.controller');
const coursecatController = require('../controller/course_category.controller');

router.get('/detailsCategory',validate(categoryValidation.categoryvalid) ,courseCategoryroute.courseCategoryControl);


router.get('/:_id',coursecatController.courseCategoryIdControl);
module.exports = router;