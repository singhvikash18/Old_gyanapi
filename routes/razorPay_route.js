const router =require('express').Router();
const{createOrder}= require('../controller/razorpay_controller');

router.get('/createorder',createOrder);

module.exports = router;
