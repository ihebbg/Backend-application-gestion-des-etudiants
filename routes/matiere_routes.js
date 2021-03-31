const express = require('express')
const router = express.Router()
const Matiere = require('../models/matiére')//importer le model matiere
const {validation_matiere} = require('../validation')
const verify = require('../verifytoken')



//GET MATIERES
router.get('/matieres',verify,async(req,res)=>{
    try{
        const matieres = await Matiere.find()
  
        res.json(matieres)
        console.log("GET successefly")
    
    }catch(error){
        res.json({message: error})
        
    }
    })

//GET SPECIFIC MATIERE
router.get('/matieres/:idMat',verify,async(req,res)=>{

    try{
        const specific_matiere =  await Matiere.findById({_id:req.params.idMat})
        res.json(specific_matiere)
        console.log("GETSPEC successefly")
    
    
    }catch(error){
        res.json({message:error})
    }
    })

//ADD MATIERE
router.post('/nouveau_matiere',verify,async (req,res)=>{

 //Validate data 
     const {error} = validation_matiere(req.body)
     if(error) return res.send(error.details[0].message)

// create matiére
    const matiere = new Matiere({
        libelle:req.body.libelle,
        coefficient:req.body.coefficient,
        nombre_heures:req.body.nombre_heures,
    })
    
    try{
        const save_matiere = await matiere.save()
        res.json(save_matiere)
        console.log("POST successefly")

    }catch(error){
        res.json({message:error})
    }
})


//UPDATE MATIERE
router.put('/matieres/:idMat',verify,async (req,res)=>{
    
   //Validate data 
        const {error} = validation_matiere(req.body)
        if(error) return res.send(error.details[0].message)

        try{
            const update_ematiere = await Matiere.updateOne(
              {_id:req.params.idMat},
              { $set:{
                libelle :req.body.libelle,
                coefficient:req.body.coefficient,
                nombre_heures:req.body.nombre_heures,
                module:req.body.module
                 
             }
            })
            res.json(update_ematiere)
            console.log("UPDATE successefly")
        }catch(error){
            res.json({message:error})
    
        }
    })
    
//DELETE MATIERE
router.delete('/matieres/:idMat',async(req,res)=>{
    try{
        const matiere_delete = await Matiere.remove({_id:req.params.idMat})
        res.json(matiere_delete)
        console.log("DELETE successefly")
    
    }catch(error){
    
        res.json({message:error})
    }
    })

module.exports=router