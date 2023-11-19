const mongoose = require('mongoose');
const Usuario = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    telefono:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Usuario', Usuario);