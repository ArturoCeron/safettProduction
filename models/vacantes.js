/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacantes = new Schema({

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
    },
    salario: {
        type: Number, 
        default: 0
    },
    desc_det: {
        type: String,
        required: true
    },
    exp_req: {
        type: String,
        required: true
    }
});


//export model
const vacantesEmpresa = mongoose.model('vacantesEmpresa', vacantes);
module.exports = vacantesEmpresa;