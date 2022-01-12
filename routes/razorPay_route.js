const router =require('express').Router();
const payController= require('../controller/razorpay_controller');

router.post('/createorder',payController.razorpayController);

router.get('/verifyOrder',payController.razorpayVerifyController);

module.exports = router;
