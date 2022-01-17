const router = require('express').Router();

const newmcqController = require('../controller/mcq2_controller');

router.get('/all',newmcqController.mcq2Controller);

module.exports = router;