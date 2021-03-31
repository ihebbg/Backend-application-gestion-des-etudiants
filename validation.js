const joi = require('@hapi/joi') /// chargement joi

// validation les champs pour les étudiants
const validation_etduiant= (data)=>{
    const schema_etud={
        cin:joi.number().required(),
        nom:joi.string().min(3).max(255).required(),
        prenom:joi.string().min(3).max(255).required(),
        adresse:joi.string().min(3).required(),
        email:joi.string().email().required().min(6),
        tel:joi.number().required()
    }
    return joi.validate(data,schema_etud)
}

// validation les champs pour les matiers
const validation_matiere=(data)=>{
    const schema_matiere={
        libelle:joi.string().required(),
        coefficient: joi.number().required(),
        nombre_heures:joi.number().required(),
    }
return joi.validate(data,schema_matiere)
}


// validation les champs pour de sign up
const validation_register=(data)=> {
    const schema_register={
        nom:joi.string().min(3).max(255).required(),
        prenom:joi.string().min(3).max(255).required(),
        email:joi.string().min(6).email().required(),
        password:joi.string().min(8).required()
    }
return joi.validate(data,schema_register)
}

//validation les champs pour sig in
const validation_login=(data)=> {
    const schema={
    email:joi.string().email().min(6).required(),
    password:joi.string().min(8).required()

    }
return joi.validate(data,schema)
}


module.exports= {validation_register,validation_login,validation_etduiant, validation_matiere}