const router = require('express').Router();

const notifyController = require('../controller/notification_controller');

router.get('/:category_id',notifyController.notificationController);

router.get('/:videoid',notifyController.notificationVideoController);

module.exports =router;