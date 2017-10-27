var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gestorSchema = new Schema({

    nombre: { type: String},
    apellidos: { type: String},
    dni: { type: String, unique: true},
    email: { type: String, unique: true},
    password: { type: String},
    delegacion: { type: String},
    departamento: { type: String},
    telefono: { type: Number}
});

module.exports = mongoose.model('Gestor', gestorSchema);