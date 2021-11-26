const express = require("express")
const router = express.Router()
const dotenv = require('dotenv');

const nodemailer = require("nodemailer")
dotenv.config({path:'./config/config.env'})
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

    const servicemail = (req) =>{
      console.log('recieved');
      // res.send("sdfasdfasdf")
        const {firstname, email, message}=req.body;
  
        const html = `Hi ${firstname}, <br>
        Email: ${email}<br>
        Message: ${message}
        `;
    const mailData = {
        from: process.env.FROMMAIL,  // sender address
          to: process.env.TOMAIL,   // list of receivers
          subject: 'mail from gyanIAS' ,
          html: html,
          
        };

        transporter.sendMail(mailData, function (err, info) {
            if(err){
              return console.log(err)
             } 
             return info.messageId;
             //return {message : "Mail send" , message_id:info.messageId}
            // res.status(200).send({ message : "Mail send" , message_id:info.messageId} );
             
            });
  return "hello";
        }

        const servicemails = async (view)=>{
            return await view;
        }

module.exports = {servicemail, servicemails};