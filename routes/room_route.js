const router =require('express').Router();

const roomController = require('../controller/room_controller');


router.get('/roomTable/:roomid',roomController.roomSerivceController);

router.get('/getMessages/:roomid',roomController.chatSerivceController);

router.post('/postMessages',roomController.chatPostServiceSerives);


module.exports = router;