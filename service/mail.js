

const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
                 // true for 465, false for other ports
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
       auth: {
            user: 'vik18nov@gmail.com',
            pass: '18nov1994V',

       },
       connectionTimeout: 2 * 60 * 1000,
      });

    const servicemail = (req,res) =>{
      console.log('recieved');
      // res.send("sdfasdfasdf")
        const {to,  html}=req.body;
  
    const mailData = {
        from: 'vik18nov@gmail.com',  // sender address
          to: to,   // list of receivers
          subject: 'mail from gyanIAS' ,
          
          html: html,//'<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
         
        };

        transporter.sendMail(mailData, function (err, info) {
            if(err){
              return console.log(err)
             } 
              res.status(200).send({ message : "Mail send" , message_id:info.messageId} );
             
            });
        }
module.exports = {servicemail};