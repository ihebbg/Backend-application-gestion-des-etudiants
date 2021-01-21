const mongoose = require('mongoose')

const étudiantschema = mongoose.Schema({
    cin:{
        type:Number,
        required:true
    },
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        required: true
    },
    adresse:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    tel:{
        type:Number,
        required: true
    }

})

module.exports=mongoose.model('étudiants',étudiantschema)
