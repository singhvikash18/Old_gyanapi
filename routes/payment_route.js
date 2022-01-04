const router =require('express').Router();

const getpayment = require('../controller/payment.controller');

router.post('/getPayment',getpayment.paymentController);

module.exports = router;