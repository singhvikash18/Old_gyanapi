const router = require('express').Router();
const authController = require('./../controller/auth_controller');

router.post('/signup',authController.userauthcontrol);

//router.post('/login',authController.login);

module.exports = router;