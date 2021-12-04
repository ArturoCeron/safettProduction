/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresasSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    postal: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    }
});


//export model
const Empresas = mongoose.model('Empresas', empresasSchema);
module.exports = Empresas;