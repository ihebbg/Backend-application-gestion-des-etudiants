const express = require('express')
const router = express.Router()
const Etudiant = require('../models/étudiant')//importer le model étudiant
const {validation_etduiant} = require('../validation')
const verify = require('../verifytoken')

//GET ETUDIANTS
router.get('/etudiants', verify,async(req,res)=>{
try{
    const étudiants = await Etudiant.find()

    res.json(étudiants)
    console.log("GET successefly")

}catch(error){
    res.json({message: error})
}
})

//GET SPECIFIC ETUDIANT
router.get('/etudiants/:idEtud',verify,async(req,res)=>{

try{
    const specific_etudiant =  await Etudiant.findById({_id:req.params.idEtud})
    res.json(specific_etudiant)
    console.log(" GETSPEC successefly")


}catch(error){
    res.json({message:error})
}
})

//ADD ETUDIANT
router.post('/nouveau_etudiant',verify,async (req,res)=>{

    // Validate data 
     const {error} = validation_etduiant(req.body)
     if(error) return res.send(error.details[0].message)

    // create étudiant
    const étudiant = new Etudiant({
        cin:req.body.cin,
        nom:req.body.nom,
        prenom:req.body.prenom,
        adresse: req.body.adresse,
        email:req.body.email,
        tel:req.body.tel

    })
    const cin_etudiant = await  Etudiant.findOne({cin:req.body.cin})
    if (cin_etudiant) return res.send("CIN already exists !")
    try{
        const save_etudiant = await étudiant.save()
        res.json(save_etudiant)
        console.log(" POST successefly")

    }catch(error){
        res.json({message:error})
    }
})

//UPDATE ETUDIANT
router.put('/etudiants/:idEtud',verify,async (req,res)=>{
    
// Validate data 
    const {error} = validation_etduiant(req.body)
    if(error) return res.send(error.details[0].message)


    try{
        const update_etudiant = await Etudiant.updateOne(
          {_id:req.params.idEtud},
          { $set:{
               cin :req.body.cin,
               nom:req.body.nom,
               prenom:req.body.prenom,
               adresse:req.body.adresse,
               email:req.body.email,
               tel:req.body.tel
         }
        })
        res.json(update_etudiant)
        console.log("UPDATE successefly")
    }catch(error){
        res.json({message:error})

    }
})

//DELETE ETUDIANT
router.delete('/etudiants/:idEtud',verify,async(req,res)=>{

try{
    const etudiant_delete = await Etudiant.remove({_id:req.params.idEtud})
    res.json(etudiant_delete)
    console.log("DELETE successefly")

}catch(error){

    res.json({message:error})
}
})

module.exports=router