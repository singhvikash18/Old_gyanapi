const User = require('./../model/user_models');
const catchAsync = require('./../utils/catch_async');
const jwt =require('jsonwebtoken');
const AppError = require('./../utils/app_error');

exports.singup = catchAsync(async (req,res,next)=>{
    const newUser = await User.create(req.body);

    const token = jwt.sign({id :newUser._id}, process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRES_IN  
    });

    res.status(201).json({
        status: 'success',
        token,
        data :{
            user:newUser
        }
    });
});

exports.login =(req,res,next)=>{
    const {email,password }= req.body;

    if(!email || !password){
        next(new AppError('please provide email and password!',400));
    }

    const token='';
    res.status(200).json({
        status:'success',
        token
    });

};