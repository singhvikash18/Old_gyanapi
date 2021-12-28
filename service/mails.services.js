const express = require("express")
const router = express.Router()
const dotenv = require('dotenv');
const handlebars = require('handlebars')
const nodemailer = require("nodemailer")
const fs = require('fs');
const path = require('path')
//dotenv.config({path:'./config/config.env'})
const transporter = nodemailer.createTransport({
                 // true for 465, false for other ports
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
       auth: {
            user: 'himanshuthakurmagictym@gmail.com',
            pass: 'dwuvxuduyfqcwcoz',

       },
       connectionTimeout: 2 * 60 * 1000,
      });

    // const servicemail = (req) =>{
    //   //console.log('recieved');
    //   // res.send("sdfasdfasdf")
    //     const {firstname, email, message}=req.body;
  
    //     const html = `Hi ${firstname}, <br>
    //     Email: ${email}<br>
    //     Message: ${message}
    //     `;
    // const mailData = {
    //     from: process.env.FROMMAIL,  // sender address
    //       to: process.env.TOMAIL,   // list of receivers
    //       subject: 'mail from gyanIAS' ,
    //       html: ,
          
    //     };
    //Read HTML File

    const readHTMLFile = (path, callback) => {
      fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
        if (err) {
          throw err;
          callback(err);
        } else {
          callback(null, html);
        }
      });
    };
    const sendEmailToAdmin = async (queryBody, referer) => {
      //console.log(referer.headers.host)
      readHTMLFile(
        path.resolve(__dirname +"../../public/mail.html"),
        function (err, html) {
          var template = handlebars.compile(html);
          var replacements = {
            name: queryBody.body.firstname,
            email: queryBody.body.email,
            message: queryBody.body.message,
            referer: referer.headers.host,
          };
        console.log(replacements);
          var htmlToSend = template(replacements);
         // console.log(htmlToSend)
         const emsils =  sendEmail(          
           process.env.TOMAIL,  
            "New query Recieved",
            htmlToSend

          );
          
        }
      );

     return "mail sent";
    };

    const sendEmail = (to, subject, html) => {
      const msg = { from: process.env.FROMMAIL, to, subject, html };
      //console.log(msg)
       return emailsend = transporter.sendMail(msg)
    };

    // const mailers = transporter.sendMail(sendEmailToAdmin , (err, info)=>{
    //   if(err){
    //     return console.log(err)
    //   }
    //   return info.messageId;
    // });
    
  



  //       const mailers = transporter.sendMail(mailData, function (err, info) {
  //           if(err){
  //             return console.log(err)
  //            } 
  //            return info.messageId;
  //            //return {message : "Mail send" , message_id:info.messageId}
  //           // res.status(200).send({ message : "Mail send" , message_id:info.messageId} );
             
  //           });
  // return req.body;
  //       }

  //       const servicemails = async (view)=>{
  //           return await view;
  //       }

  const sendResetPasswordEmail = async (to, token, headerOrigin) => {
    const subject = "Reset password";
    // replace this url with the link to the reset password page of your front-end app
    const resetPasswordUrl = `${headerOrigin}/resetpassword?token=${token}`;
    const text = `Dear user,
    To reset your password, click on this link: ${resetPasswordUrl}
    If you did not request any password resets, then ignore this email.`;
    await sendEmail(to, subject, text);
  };

module.exports = {sendEmailToAdmin, sendResetPasswordEmail };