const router =require('express').Router();

const getmails = require('../controller/mail.controller');

router.post('/email_send',getmails.controlmail);

module.exports = router;