const router = require('express').Router();

const notifyController = require('../controller/notification_controller');

router.get('/:category_id',notifyController.notificationController);

module.exports =router;