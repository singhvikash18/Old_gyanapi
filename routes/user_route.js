const router = require('express').Router();
const authController = require('./../controller/auth_controller');

router.post('/signup',authController.singup);

router.post('/login',authController.login);

module.exports = router;