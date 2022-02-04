const router = require('express').Router();

const mcqRoutes = require('../controller/mcq_controller');
const answerupdate = require('../controller/answerupdate_controller');

router.get('/getbycourse',mcqRoutes.mcqController);

router.get('/:mcqid',mcqRoutes.mcqIdController);

router.post('/categoryid',mcqRoutes.mcqCategoryController);

router.post('/bankstatus',answerupdate.answerController);

router.post('/answerUpdate',answerupdate.answerUpdateController);

module.exports = router;