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
    carrerasRelacionadas: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    cantidad: {
        type: Int
    }
});


//export model
const Empresas = mongoose.model('Empresas', empresasSchema);
module.exports = Empresas;