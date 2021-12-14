const mongoose = require('mongoose');
var validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    roles:{
        type:String,
        required:[true,'please provide your role!']
    },
    username: {
        type:String,
        required:[true,'please provide your name!'],
        unique:true,
        trim:true
    },
    firstname:{
        type:String,
        required:[true,'please provide your firstname!']
    },
    lastname:{
        type:String,
        required:[true,'please provide your lastname!']
    },
    phone:{
        type:String,
        required:[true,'please provide your phone no.!']
    },
    email: {
        type:String,
        required:[true, 'please provide your email!'],
        unique:true,
        lowercase:true,
        validate: [validator.isEmail,'please tell your email']
    },
    password: {
        type:String,
        required:[true,'please provide your password!'],
        minlength:8
    },
    confirmpassword: {
        type:String,
        required: [true,'please confirm your password!']
    }
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    return next();

    this.password =await bcrypt.hash(this.password, 12);

    this.passwordConfirm =undefined;
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;