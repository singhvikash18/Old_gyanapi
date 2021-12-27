const User = require('./../model/user_models');
const catchAsync = require('./../utils/catch_async');
const jwt =require('jsonwebtoken');
// const crypto = require('crypto');
const AppError = require('./../utils/app_error');
const signupservices =require('../service/user_services');
const authservices =require('../service/auth.services');
const { pick } = require("lodash");
const httpStatus = require('http-status');
const emailService = require('../service/mails.services');
const tokenservices = require('../service/token.services');
var CryptoJS = require("crypto-js");


const userauthcontrol = catchAsync(async(req,res)=>{
    //console.log(req.body)
    const cdd = await signupservices.getUser(req.body);
    //console.log(cdd);
    // const token = jwt.sign({id :newUser._id}, process.env.JWT_SECRET,{
    //         expiresIn : process.env.JWT_EXPIRES_IN  
    //     });
    const response = cdd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.CREATED,
        message: "Registration has been successfully !",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
});

const loginController =  catchAsync( async (req, res) =>{

    //user login data sending
    // console.log(req)
    const userdetails = await authservices.userlogin(req.body.email, req.body.password,req.body.roles);
    const users =  {
        _id: userdetails.id,
  roles: userdetails.roles,
  username: userdetails.username,
  firstname: userdetails.firstname,
  lastname: userdetails.lastname,
  phone: userdetails.phone,
  email: userdetails.email,
    }
    console.log(userdetails)
    const tokens = await authservices.generateAuthTokens(userdetails.id);
    // cookie.set('token',CryptoJS.AES.encrypt(JSON.stringify(res.data.tokens.access.token), '619619').toString()
    // ,{expires: new Date(res.data.tokens.access.expires)})

   res.cookie("token", CryptoJS.AES.encrypt(JSON.stringify(tokens.access.token), '619619').toString(), {
    secure:true, //process.env.NODE_ENV !== "development",
    httpOnly: true, sameSite: 'strict',
    expires: new Date(tokens.access.expires),
   });

   res.cookie("user", CryptoJS.AES.encrypt(JSON.stringify(users), '619619').toString(), {
    secure: true ,//process.env.NODE_ENV !== "development",
    sameSite: 'strict',
    httpOnly: true,
    expires: new Date(tokens.access.expires),
   });

   console.log(process.env.NODE_ENV );
     const response = {user: users };
    const data ={
        status_code : httpStatus.OK,
        itemCount: 2,
        message: "successfully login",
         data: response,
    };
    res.status(httpStatus.OK).send(data);

})




const forgotPassword = catchAsync(async (req, res) => {
    const resetPasswordToken = await authservices.generateResetPasswordToken(
      req.body.email
    );
    await emailService.sendResetPasswordEmail(
      req.body.email,
      resetPasswordToken,
      req.headers.origin
    );
    const data = {
      status_code: httpStatus.OK,
      itemCount: 1,
      message:
        "An email has been send to " +
        req.body.email +
        " with the set of instructions",
      data: "",
    };
    res.status(httpStatus.OK).send(data);
  });

//   const sendResetPasswordEmail = async (to, token, headerOrigin) => {
//     const subject = "Reset password";
//     // replace this url with the link to the reset password page of your front-end app
//     const resetPasswordUrl = `${headerOrigin}/auth/reset-password?token=${token}`;
//     const text = `Dear user,
//     To reset your password, click on this link: ${resetPasswordUrl}
//     If you did not request any password resets, then ignore this email.`;
//     await sendEmail(to, subject, text);
//   };

const fetchIdcontrol = async(req,res)=>{
    const gettokens =  await tokenservices.verifyTokenuser(req.body.token);
    //console.log(gettokens);
    const alldetails =  await signupservices.fetchId(gettokens.user)
    //console.log(alldetails);
    const response = alldetails;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};
  

const user_read={userauthcontrol,loginController,forgotPassword,fetchIdcontrol}

module.exports= user_read;