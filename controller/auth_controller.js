const User = require('./../model/user_models');
const catchAsync = require('./../utils/catch_async');
const jwt =require('jsonwebtoken');
const AppError = require('./../utils/app_error');
const signupservices =require('../service/user_services');
const authservices =require('../service/auth.services');

const httpStatus = require('http-status');

const userauthcontrol = catchAsync(async(req,res)=>{
    //console.log(req.body)
    const cdd = await signupservices.getUser(req.body);
    //console.log(cdd);
    const token = jwt.sign({id :newUser._id}, process.env.JWT_SECRET,{
            expiresIn : process.env.JWT_EXPIRES_IN  
        });
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
    const user = await authservices.userlogin(req.body.email, req.body.password,req.body.roles);
    console.log(user);
    const tokens = await authservices.generateAuthTokens(user.id);
    const response = {user: user, tokens };
    const data ={
        status_code : httpStatus.OK,
        itemCount: 2,
        message: "successfully loign in",
        data: response,
    };
    res.status(httpStatus.OK).send(data);

})
    


// exports.singup = catchAsync(async (req,res,next)=>{
//     const newUser = await User.create(req.body);

//     // const token = jwt.sign({id :newUser._id}, process.env.JWT_SECRET,{
//     //     expiresIn : process.env.JWT_EXPIRES_IN  
//     // });

//     res.status(200).json({
//         status: 'success',
        
//         data :{
//             user:newUser
//         }
//     });
// });


// exports.login =(req,res,next)=>{
//     const {email,password }= req.body;

//     if(!email || !password){
//         next(new AppError('please provide email and password!',400));
//     }

//     const token='';
//     res.status(200).json({
//         status:'success',
//         token
//     });

// };

const user_read={userauthcontrol,loginController,}

module.exports= user_read;