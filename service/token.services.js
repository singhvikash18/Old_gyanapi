const moment = require("moment")
const jwt = require("jsonwebtoken");
const { create } = require("lodash");
const httpStatus = require("http-status");
const Token = require("../model/token.model");
const AppError = require("../utils/app_error");

const generateToken = (userID, expires, secret = process.env.JWT_SECRET)=> {
    const payload = {
        sub:userID,
        iat: moment().unix(),
        exp: expires.unix(),
    };
    return jwt.sign(payload, secret);
}

const saveToken = async (token, userID, expires, type ) => {
    const tokenDoc = await Token.create({
        token,
        user: userID,
        expires: expires.toDate(),
        type
       
    })
     return tokenDoc;
    }

    const verifyToken = async (token,type) => {
      
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload)
      const tokenDoc = await Token.findOne({
        token,
        type,
        user: payload.sub,
       
      });
      if (!tokenDoc && tokenDoc == null) {
        throw new AppError(httpStatus.NOT_FOUND, "Token not found");
      }
      return tokenDoc;
    }


    const verifyTokenuser = async (token) => {
      console.log(process.env.JWT_SECRET)
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload)
    const tokenDoc = await Token.findOne({
      token,
      user: payload.sub,
     
    });
    console.log(tokenDoc)
    if (!tokenDoc && tokenDoc == null) {
      throw new AppError(httpStatus.NOT_FOUND, "Token not found");
    }
    return tokenDoc;
  }

    module.exports = {
        generateToken,
        saveToken,
        verifyToken,
        verifyTokenuser,
    }
    