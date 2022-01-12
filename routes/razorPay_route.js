const router =require('express').Router();
const payController= require('../controller/razorpay_controller');

router.post('/createorder',payController.razorpayController);

module.exports = router;
