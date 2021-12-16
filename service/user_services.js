const httpStatus = require('http-status');
const userModel = require('../model/user_models');
const AppError = require('../utils/app_error');

const checkDuplicateEmail = async(signupbodyemail, excludeUserId)=>{
    const user = await userModel.findOne({signupbodyemail, _id: { $ne: excludeUserId }})
    if(user){
        //return user;
        throw new AppError(httpStatus.BAD_REQUEST, "Email already taken");
    }
      
};

const getUser = async(signupbody)=>{
   // console.log(signupbody)
   const duplicateCheck = await checkDuplicateEmail(signupbody.email);
    const authuser= await userModel.create(signupbody);
    return authuser;
}


module.exports ={getUser,}

