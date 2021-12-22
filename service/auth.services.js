const loginservices = require('../service/login.services')
const tokenservice =require('./token.services');
const httpStatus =require('http-status');
const bcrypt = require('bcryptjs');
const moment = require('moment')
const AppError = require('../utils/app_error');



const checkPassword =  async (password, correctPassword) => {
    const isPasswordMatch = await bcrypt.compare(password, correctPassword);
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.BAD_REQUEST, "Passwords do not match");
      }

}

const userlogin = async (email, password,roles) => {

    
        const user = await loginservices.getUserbyEmail(email,roles);
        console.log(user);
        await checkPassword(password, user.password);
        return user;
    // } catch (error){
    //     throw new AppError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
    // }

}
const generateAuthTokens = async (userID)=>{
    const accessTokenExpires = moment().add(process.env.JWT_ACCESS_EXPIRATION_MINUTES, "minutes");
    const accessToken = tokenservice.generateToken(userID, accessTokenExpires)
    const refreshTokenExpires = moment().add(process.env.JWT_REFRESH_EXPIRATION_DAYS, "minutes");
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
module.exports =  {
    userlogin,
    generateAuthTokens
}