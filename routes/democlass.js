const router = require('express').Router();

const Democlasses = require('../model/democlassesmodel')

router.get('/democlasslist', async(req,res)=>{
    try{
        const demo = await Democlasses.find()
        res.json(demo)
    }catch(err){
        res.send('Error' + err)
    }
})
module.exports = router;