const router =require('express').Router();

const getpayment = require('../controller/payment.controller');

router.post('/paidStudent',getpayment.paymentController);

module.exports = router;