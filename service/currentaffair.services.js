const router = require('express').Router()

const Current = require('../model/currentaffairmodel')


const caservices = async()=>{
   // try{
    
        const ca = await Current.find()
        // console.log(ca);
        return ca;
       // res.send(ca);
    //     res.json(ca)
    // }catch(err){
    //     res.send('Error'+ err)
    // }
}

const caslug =  async (slug)=>{
   
    //console.log(req.params.id);
        console.log(slug);
        const cas = await Current.findOne({"currentaffair_slug":slug})
        return cas;
 }

module.exports ={ caservices, caslug} ;