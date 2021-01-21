const mongoose = require('mongoose')
require('../models/matiére')
require('../models/étudiant')

const abscentschema = mongoose.Schema({
    date_abscent:{
        type:Date,
        default: Date.now
        
    },
    étudiant:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "étudiants",

    },
    matiere:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "matiéres",
    }

})

module.exports=mongoose.model('abscents',abscentschema)
