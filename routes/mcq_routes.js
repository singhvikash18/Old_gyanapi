const router = require('express').Router();

const mcqRoutes = require('../controller/mcq_controller');

router.get('/all',mcqRoutes.mcqController);

router.post('/categoryid',mcqRoutes.mcqCategoryController);

module.exports = router;