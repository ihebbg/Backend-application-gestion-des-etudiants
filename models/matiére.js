const mongoose = require('mongoose')
require('../models/module')

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
    },
    module:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "modules",
        required:true
    }

})

module.exports=mongoose.model('matiéres',matiereschema)
