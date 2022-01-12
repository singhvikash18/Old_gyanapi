const router = require('express').Router();

const mcqRoutes = require('../controller/mcq_controller');

router.get('/all',mcqRoutes.mcqController);

module.exports = router;