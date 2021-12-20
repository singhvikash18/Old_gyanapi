const router =require('express').Router();
const validate= require("../middleware/validate");
const loginauthroute = require('../controller/auth_controller');
const authvalidation = require('../validation/auth.validation');

router.post('/login',validate(authvalidation.login),loginauthroute.loginController);

module.exports=router;