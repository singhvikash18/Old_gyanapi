const router = require('express').Router();

const getmails = require('../controller/mail.controller');
const demoroute = require('../service/democlass.services');
const caffairs = require('../service/currentaffair.services');


router.post('/email_send',getmails.controlmail);

router.use('/classes' , demoroute);

router.use('/currentaffair', caffairs);

module.exports =router;