/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactoEmpresas = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    correo: {
        type: String, 
        unique:true,
        lowercase:true,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    extension: {
        type: Int
    }
});

//export model
const contactos = mongoose.model('contactos', contactoEmpresas);
module.exports = contactos;