const router = require('express').Router()

const Current = require('../model/currentaffairmodel')

router.get('/all', async(req,res)=>{
    try{
        const ca = await Current.find()
        res.json(ca)
    }catch(err){
        res.send('Error'+ err)
    }
})

module.exports = router;