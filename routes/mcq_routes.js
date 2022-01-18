const router = require('express').Router();

const mcqRoutes = require('../controller/mcq_controller');

router.get('/all',mcqRoutes.mcqController);

router.get('/:mcqid',mcqRoutes.mcqIdController);

router.post('/categoryid',mcqRoutes.mcqCategoryController);

module.exports = router;