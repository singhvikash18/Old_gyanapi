const httpStatus = require('http-status');
const User = require('../model/user_models');

const userModel = require('../model/user_models');
const AppError = require('../utils/app_error');
const JWT = require('jsonwebtoken');
const { ObjectId } = require('mongodb');


const checkDuplicateEmail = async(signupbodyemail, excludeUserId)=>{
    const user = await userModel.findOne({email:signupbodyemail, _id: excludeUserId })
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

const signup = async (data) => {
    let user = await User.findOne({ email: data.email });
    if (user) {
      throw new Error("Email already exist");
    }
    user = new User(data);
    const token = JWT.sign({ id: user._id }, JWTSecret);
    await user.save();
    return (data = {
      userId: user._id,
      email: user.email,
      username: user.username,
      token: token,
    });
  };
const fetchId = async(id)=>{
    //console.log(id)
    const fid = await User.findById(id);
    return fid;
}

const isEmailDuplicate = async(useremail)=>{

  const user = await userModel.findOne({email:useremail})
    if(user){
        //return user;
        throw new AppError(httpStatus.BAD_REQUEST, "Email already taken");
    }
}

const isUsernameDuplicate = async(username)=>{
  const user = await userModel.findOne({username:username})
    if(user){
        //return user;
        throw new AppError(httpStatus.BAD_REQUEST, "Username already taken");
    }
}

const userPIUpdate = async(req,res)=>{
  const query= {_id:req._id}
  const validemail = await isEmailDuplicate(req.email);
  const validusername = await isUsernameDuplicate(req.username);
const updatenumber =  {firstname: req.firstname,lastname:req.lastname,address:req.address ,username:req.username,email: req.email};
  

  const su = await User.findOneAndUpdate(query,updatenumber)

}


module.exports ={getUser,signup,fetchId,userPIUpdate}