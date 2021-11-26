const router = require('express').Router();

const getmails = require('../service/mail');

router.post('/email_send',getmails.servicemail);

module.exports =router;
