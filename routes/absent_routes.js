const express = require('express')
const router = express.Router()
const Abscent = require('../models/abscent')//importer le model abscent
const verify = require('../verifytoken')

require('../models/matiére')
require('../models/étudiant')


//GET ABSCENTS
router.get('/absents',verify,async(req,res)=>{
    try{
        const abscents = await Abscent.find().populate('étudiant').populate('matiere')
        res.json(abscents)
        console.log("GET successefly")
    
    }catch(error){
        res.json({message: error})
    }
    })


//ADD ABSCENT
router.post('/nouveau_absent',verify,async (req,res)=>{

// create abscent
    const abscent = new Abscent({
        étudiant:req.body.étudiant,
        matiere:req.body.matiere
    })
    
    try{
        const save_abscent = await abscent.save()
        res.json(save_abscent)
        console.log("POST successefly")

    }catch(error){
        res.json({message:error})
    }
})


//DELETE ABSCENT 
router.delete('/absents/:idAb',verify,async(req,res)=>{
    
    try{
        const abscent_delete = await Abscent.remove({_id:req.params.idAb})
        res.json(abscent_delete)
        console.log("DELETE successefly")
    
    }catch(error){
    
        res.json({message:error})
    }
    })

module.exports=router