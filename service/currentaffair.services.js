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

router.get('/:slug', async (req,res)=>{
   
    //console.log(req.params.id);
     const ca = await Current.findOne({currentaffair_slug:req.params.slug})
        res.json(ca);
 })

 

module.exports = router;