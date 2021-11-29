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

router.post('/democlass_submit', async (req,res)=>{
    const demosubmit = new Democlasses({
        demoClass_named: req.body.demoClass_named,
        demoClass_video_link: req.body.demoClass_video_link,
        demoClass_photo_link: req.body.demoClass_photo_link,
        demoClass_title: req.body.demoClass_title,
        demoClass_tutor_name: req.body.demoClass_tutor_name,
        demoClass_created_at: req.body.demoClass_created_at
    })
    try{
        const dc=await demosubmit.save()
        res.json(dc)
    }catch(err){
        res.send('error')
    }
    
    
})
module.exports = router;