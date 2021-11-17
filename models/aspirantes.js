/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aspirantes = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    fechaNac: {
        type: Date,
        required: true
    },
    correo: {
        type: String, 
        unique:true,
        lowercase:true,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    ingles: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    estudios: {
        type: String,
        required: true
    },
    universidad: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    }
});


//export model
const aspirantesITT = mongoose.model('aspirantes', aspirantes);
module.exports = aspirantesITT;