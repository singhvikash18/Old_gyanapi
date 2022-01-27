const router = require('express').Router();

const notifyController = require('../controller/notification_controller');

///router.get('/category/:user_id',notifyController.notificationController);

router.get('/:user_id',notifyController.notificationVideoController);

module.exports =router;