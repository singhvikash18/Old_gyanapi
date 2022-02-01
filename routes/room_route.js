const router =require('express').Router();

const roomController = require('../controller/room_controller');


router.get('/:roomid',roomController.roomSerivceController);

module.exports = router;