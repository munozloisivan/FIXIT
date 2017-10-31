var mongoose = require('mongoose'),
    Usuario = mongoose.model('Usuario');

var User = require('../models/usuario');

/*CREATE*/
//Insert a new user
exports.addUser = function (req, res) {
    console.log("POST addUser");

    var usuario = new Usuario(({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        alias: req.body.alias,
        dni: req.body.dni,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        codigoPostal: req.body.codigoPostal
    }));

    usuario.save(function (err, usuario) {
        if(err)
            return res.status(500).send(err.message);
        res.status(200).jsonp(usuario);
    });
};

/*READ*/
//Buscar usuario por ID
exports.findUserById = function (req, res) {
    Usuario.findById(req.params.id, function (err, usuario) {
        if(err)
            return res.send(500, err.message);
        console.log('GET usuario' + req.params.id);
        res.status(200).jsonp(usuario);
    });
};

//Buscar todos los ususarios
exports.findAllUsers = function (req, res) {
    Usuario.find(function (err, usuarios) {
        if(err)
            res.send(500, err.message);

        console.log('GET usuarios');
        res.status(200).jsonp(usuarios);
    });
};

/*UPDATE*/
//Actualizas datos personales
exports.updateUsuarioPersonal = function (req, res) {
    Usuario.findById(req.params.id, function (err,usuario) {

            //el DNI no se puede cambiar, dado que siempre tendrá el mismo
            usuario.nombre = req.body.nombre,
            usuario.apellido = req.body.apellido,
            usuario.alias = req.body.alias,
            usuario.email = req.body.email,
            usuario.password = req.body.password,
            usuario.telefono = req.body.telefono,
            usuario.codigoPostal = req.body.codigoPostal;

        usuario.save(function (err, usuario) {
            if(err)
                return res.status(500).send(err.message);
            res.status(200).jsonp(usuario);
        });
    });
};

//Actualizar datos relacionados con avisos, logros, etc
exports.updateUsuarioTecnico = function (req, res) {
    Usuario.findById(req.params.id, function (err, usuario) {


        usuario.save(function (err, usuario) {
            if(err)
                return res.status(500).send(err.message);
            res.status(200).jsonp(usuario);
        });
    });


};

/*DELETE*/
//Eliminar un usuario por su ID
exports.deleteUser = function (req, res) {

    Usuario.findById(req.params.id, function (err, usuario) {
        usuario.remove(function (err) {
            if(err)
                return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};


//Authenticate
exports.UserAuthentication = function (req, res) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
        if(error || !user){
            var error = new Error('Correo o contraseña incorrectos.');
            error.status = 401;
            return res.send(error.message);
        } else {
            return res.send('Autenticado correctamente');
        }

    });
};


