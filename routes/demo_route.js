const router =require('express').Router();

const demoroute =require('../controller/demo.controller');

router.get('/all',demoroute.demoController);
router.get('/:demoId',demoroute.demoControllerId);

module.exports = router;