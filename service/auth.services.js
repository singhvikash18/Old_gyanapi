const loginservices = require('../service/login.services')
const tokenservice =require('./token.services');

const User = require('../model/user_models');
const httpStatus =require('http-status');

const userservices = require('../service/user_services');

const bcrypt = require('bcryptjs');

const moment = require('moment')
const AppError = require('../utils/app_error');




const checkPassword =  async (password, correctPassword) => {
  //console.log(password, correctPassword)
   const isPasswordMatch = await bcrypt.compare(password, correctPassword);
    
    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.BAD_REQUEST, "Passwords do not match");
      }

}

const userlogin = async (email, password,roles) => {

    
        const user = await loginservices.getUserbyEmail(email,roles);
        console.log(user);
        await checkPassword(password, user.password);
        return user;
    

}

const updatePassword = async(req)=>{
  //1
//   const pass =await User.findById(req.user.id).select('+password');
//   if(! (await pass.correctPassword(req.body.passwordCurrent,pass.password))){
//     return (new AppError('your current password is wrong  .',401));

//   }
//   pass.password = req.body.password;
//   pass.correctPassword = req.body.correctPassword;
//   await pass.save(); 
const passs =  await bcrypt.hash(req.confirmpassword, 12)
await checkPassword(req.password, passs);
// console.log(req.confirmpassword, reqpasswo.rd);
const passsord = await bcrypt.hash(req.password, 12)
var query = {email: req.email};
var changepasssword = {password:passsord, confirmpassword:passs};

const pass = await User.updateMany(query, changepasssword);



 } 

const generateAuthTokens = async (userID)=>{
    const accessTokenExpires = moment().add(process.env.JWT_ACCESS_EXPIRATION_MINUTES, "minutes");
    console.log(accessTokenExpires); console.log(process.env.JWT_ACCESS_EXPIRATION_MINUTES)
    const accessToken = tokenservice.generateToken(userID, accessTokenExpires)
    const refreshTokenExpires = moment().add(process.env.JWT_REFRESH_EXPIRATION_DAYS, "days");
    const refreshToken = tokenservice.generateToken(userID, refreshTokenExpires)

    await tokenservice.saveToken(
        refreshToken,
        userID,
        refreshTokenExpires,
        "refresh"
    );
    return {
        access:{
            token:accessToken,
            expires:accessTokenExpires.toDate(),
        },
        refresh:{
            token:refreshToken,
            expires:refreshTokenExpires.toDate(),
        }
    }
}

const generateResetPasswordToken = async (email) => {
    
    let user = await User.findOne({ email:email });
    console.log(user);
    if (!user) {
        throw new AppError(httpStatus.BAD_REQUEST, "email do not match");
      }
    

    
    const expires = moment().add(
      process.env.JWT_EXPIRES_IN,
      "minutes"
    );
    console.log(expires);
    const resetPasswordToken = tokenservice.generateToken(user._id, expires);
    await tokenservice.saveToken(
      resetPasswordToken,
      user._id,
      expires,
      "resetPassword"
    );
    
    return resetPasswordToken;
  };





module.exports =  {
    userlogin,
    generateAuthTokens,
    generateResetPasswordToken,
     updatePassword,
}