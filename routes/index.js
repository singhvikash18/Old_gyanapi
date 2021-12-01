const router = require('express').Router();

const getmails = require('../controller/mail.controller');
const demoroute = require('../routes/democlass');
const caffairs = require('../routes/currentaffair');


router.post('/email_send',getmails.controlmail);

router.use('/classes' , demoroute);

router.use('/currentaffair', caffairs);

module.exports =router;