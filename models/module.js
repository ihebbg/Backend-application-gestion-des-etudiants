const mongoose = require('mongoose')

const moduleschema = mongoose.Schema({
    nom_module:{
        type:String,
        required:true
    }})

module.exports=mongoose.model('modules',moduleschema)
