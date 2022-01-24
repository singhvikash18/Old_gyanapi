const router = require('express').Router();

const ansRoute = require('../controller/answerupdate_controller');

router.get('/:userid',ansRoute.answerController);

router.post('/update',ansRoute.answerUpdateController);

module.exports = router;