const router = require('express').Router();

const newmcqController = require('../controller/mcq_question_controller');

router.get('/:mcqsid',newmcqController.mcq2Controller);

module.exports = router;