const router = require('express').Router();

const ansRoute = require('../controller/answerupdate_controller');

router.get('/getanswer',ansRoute.answerController);

router.post('/',ansRoute.answerUpdateController);

module.exports = router;