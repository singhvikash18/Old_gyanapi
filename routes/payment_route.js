const router =require('express').Router();

const getpayment = require('../controller/payment.controller');

router.post('/getPayment',getpayment.paymentController);

router.post('/status',getpayment.paymentStatusController);

module.exports = router;