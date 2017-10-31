var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    gestorCtrl = require('../controllers/gestor');

/*GET*/
//Obtener todos los gestores
router.get('/all', gestorCtrl.findAllGestores);
//Obtener gestor por id
router.get('/:id', gestorCtrl.findGestorById);

/*POST*/
//Añadir un gestor
router.post('/add', gestorCtrl.addGestor);

/*PUT*/
//Modificar datos de un gestor
router.put('/:id/update', gestorCtrl.updateGestor);

/*DELETE*/
//Eliminar gestor a partir de su id
router.delete('/:id/delete', gestorCtrl.deleteGestorById);

//Authenticate
router.post('/auth', gestorCtrl.GestorAuthentication);

module.exports = router;