var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    nombre: { type: String},
    apellidos: { type: String },
    alias: { type: String },
    dni: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    telefono: { type: Number, unique: true },
    codigoPostal: { type: Number },
    puntos: { type: Number },
    participantes: { type: Number }, /*nº de personas que apoyan sus avisos*/
    titulos: {
        tituloActivo: { type: String },
        coleccion: [ {type: String} ] /*se añade al vector una vez tiene el logro, lo veo mas sencillo,
                                        no hace falta relacionarlo con la coleccion logro*/
    },
    avisos: { creados: [ {type: mongoose.Schema.Types.ObjectId, ref:'Aviso'}],
              apoyados: [{ type: mongoose.Schema.Types.ObjectId, ref:'Aviso'}]}, /* creados[], apoyados[] */
    logros: [{ type: mongoose.Schema.Types.ObjectId, ref:'Logro'}] /* vector con id de los logros */

});

module.exports = mongoose.model('Usuario', usuarioSchema);