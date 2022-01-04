const mongoose = require('mongoose');
var validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    roles:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
         //validate:validator.isEmail,
        validator(value) {
            if (!validator.isEmail(value)) {
              throw new Error("Invalid email");
            }
          },
    },
    password: {
        type:String,
        required:true
    },
    confirmpassword: {
        type:String,
        required: true,
        validate:{
            validator:function(el){
                return el === this.password;

            },
            message:'passwords are not same!'
        }
    },
    address:{
        type: String,
        required: true
    },
    city :{
        type: String,
        required:true
    },
    states:{
        type: String,
        required: true
    },
    photo :{
        type: String,
        required: true
    },
    country :{
        type : String,
        required : true
    }

},
{
    timestamps:true,
    toObject: { getters: true },
    toJSON: { getters: true },
}
);

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    return next();

    this.password =await bcrypt.hash(this.password, 12);

    this.confirmpassword =await bcrypt.hash(this.confirmpassword, 12);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;