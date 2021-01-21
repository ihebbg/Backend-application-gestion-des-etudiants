const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required: true
    },
    password :{
        type:String,
        required: true
    }

})

module.exports=mongoose.model('users',userschema)