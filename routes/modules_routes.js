const express = require('express')
const router = express.Router()
const Module = require('../models/module')//import le model module
const {validation_module}= require('../validation')
const verify = require('../verifytoken')



//GET MODULES
router.get('/modules',verify,async(req,res)=>{
    try{
        const modules = await Module.find()

        res.json(modules)
        console.log("GET successefly")
    
    }catch(error){
        res.json({message: error})
    }
    })


//ADD MODULE
router.post('/nouveau_module',verify,async (req,res)=>{

// Validate data 
     const {error} = validation_module(req.body)
     if(error) return res.send(error.details[0].message)

// create moduel
    const module = new Module({
        nom_module:req.body.nom_module,
    
    })
    
    try{
        const save_module = await module.save()
        res.json(save_module)
        console.log("POST successefly")

    }catch(error){
        res.json({message:error})
    }
})


// Delete module
router.delete('/modules/:IdMd',verify,async(req,res)=>{


    try{
        const module_delete = await Module.remove({_id:req.params.IdMd})
        res.json(module_delete)
        console.log("DELETE successefly")
    
    }catch(error){
    
        res.json({message:error})
    }

})
module.exports=router