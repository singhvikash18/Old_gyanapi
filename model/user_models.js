const mongoose = require('mongoose');
var validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'please tell your name!']
    },
    email: {
        type:String,
        required:[true, 'please tell your email!'],
        unique:true,
        lowercase:true,
        validate: [validator.isEmail,'please tell your email']
    },
    password: {
        type:String,
        required:[true,'please provide your password!'],
        minlength:8
    },
    passwordConfirm: {
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