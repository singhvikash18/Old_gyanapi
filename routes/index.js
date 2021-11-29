const router = require('express').Router();

const getmails = require('../controller/mail.controller');
const demoroute = require('../routes/democlass');


router.post('/email_send',getmails.controlmail);

router.use('/classes' , demoroute)

module.exports =router;