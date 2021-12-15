const router =require('express').Router();

const userModel = require('../model/user_models');


const getUser = async(signupbody)=>{
   // console.log(signupbody)
    const authuser= await userModel.create(signupbody);
    
    return authuser;
}

module.exports ={getUser,}

