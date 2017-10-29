var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    usuarioCtrl = require('../controllers/usuario');

//Todos los metodos de usuario

//exports.NOMBRE-FUNCION = function(req,res){
//
//           mongo method
//
// }

//insertar un usuario
router.post('/add', usuarioCtrl.addUser);

//ver todos los usuarios
router.get('/all', usuarioCtrl.findAllUsers);

//Ver usuario por id
router.get('/:id', usuarioCtrl.findUserById);

module.exports = router;