const User = require("../model/user_models");
const AppError = require("../utils/app_error");
const httpStatus = require("http-status");
// const bcrypt = require("bcryptjs");
// const token = require("jsonwebtoken");



const getUserbyEmail = async(email,roles)=>{
    const getEmail =await User.findOne({email:email,roles:roles});
    console.log(getEmail);
    if(!getEmail)
    {
        throw new AppError(httpStatus.NOT_FOUND,"No user found with this email");
    }
    return getEmail;
}
// const getloginByEmail = (username)=>{
//     User.findOne({username:username})
//     .exec()
//     .then(user=>{
//         if(user.length <1)
//         {
//             return res.status(401).json({
//                 msg:"user not exists"
//             })
//         }
//         bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
//             if(!result)
//             {
//                 return res.status(401).json({
//                     msg:'password not matched'
//                 })
//             }if(result)
//             {
//                 const token = jwt.sign({
//                     username:user[0].username,
//                     email:user[0].email
//                 },process.env.JWT_SECRET,
//                 {
//                     expiresIn:"48h"

//                 });
//                 res.status(200).json({
//                     username:user[0].username,
//                     email:user[0].email,
//                     token:token
//                 })

//             }
//         })
//     }) 
//     .catch(err=>{
//         res.status(500).json({
//             err:err
//         })
//     })
// }

module.exports= {
    getUserbyEmail}