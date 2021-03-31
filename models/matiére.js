const mongoose = require('mongoose')

const matiereschema = mongoose.Schema({
    libelle:{
        type:String,
        required:true
    },
    coefficient:{
        type:Number,
        require:true
    },
    nombre_heures:{
        type:Number,
        required: true
    }

})

module.exports=mongoose.model('matiéres',matiereschema)
