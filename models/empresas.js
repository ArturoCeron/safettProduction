/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresasSchema = new Schema({

    fecha: {
        type: Date
    },
    nombre: {
        type: String,
        required: true
    },
    vacantes: {
        type: Int
    },
    publicadas: {
        type: Int,
    },
    contacto: {
        type: String,
        required: true
    }
});


//export model
const Empresas = mongoose.model('Empresas', empresasSchema);
module.exports = Empresas;