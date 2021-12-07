const democlass = require('../model/democlass_model');

const demoservice = async()=>{
    const ms = await democlass.find()
    return ms;
}

module.exports={demoservice,};