const httpStatus = require('http-status');
const User = require('../model/user_models');

const userModel = require('../model/user_models');
const AppError = require('../utils/app_error');
const JWT = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator')
const multer  = require('multer');
const { sendOtpEmail } = require('./mails.services');
const upload = multer({ dest: 'profile/' })



const checkDuplicateEmail = async(signupbodyemail, excludeUserId)=>{
    const user = await userModel.findOne({email:signupbodyemail, _id: excludeUserId })
    if(user){
        //return user;
        throw new AppError(httpStatus.BAD_REQUEST, "Email already taken");
    }
      
};
// for  user signup
const getUser = async(signupbody)=>{
   // console.log(signupbody)
   const duplicateCheck = await checkDuplicateEmail(signupbody.email);
    const authuser= await userModel.create(signupbody);
  const  emailsend = await sendOtpEmail(authuser.email, authuser.emailotp)
    

    //
    return emailsend;
}

const getemailOtp =async(req)=>{
  const otpuser = await userModel.findOneAndUpdate({_id:req.userid,emailotp:req.emailotpid},{ 
    $set: {isVerified:'1'}
},
{
    returnNewDocument: true
});
  return otpuser;
}


const signup = async (data) => {
    let user = await User.findOne({ email: data.email });
    if (user) {
      throw new Error("Email already exist");
    }
    
    console.log(data)

    user = new User(data);

    console.log(user)

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


//for user PI update...

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

// for password update 
const userPassupdate = async(req,res) =>{
  const query = {_id : req._id}
  const confirmPassword =  await bcrypt.hash(req.confirmpassword, 12)
  const passsord = await bcrypt.hash(req.password, 12)
  const updatepass = {password: passsord , confirmpassword:confirmPassword }


if(req.confirmpassword === req.password){
  const updatepass1 = await User.findOneAndUpdate(query,updatepass)
}else{
  
   
    throw new AppError(httpStatus.BAD_REQUEST, "password dosen't match ");

}
}

//change avatar 

const userAvatar =  async(req,res)=>{
 /// console.log(req)
  const query ={_id:req.body.userid}
  const updateimage = {photo : req.headers.host+'/profile/'+req.file.filename}

  const uploadpic = await User.findOneAndUpdate(query,updateimage)
 
    
}



module.exports ={getUser,signup,fetchId,userPIUpdate,userPassupdate,userAvatar,getemailOtp,}