const router = require('express').Router();

const getmails = require('../service/mail');

router.post('/test',getmails.servicemail);

module.exports =router;
