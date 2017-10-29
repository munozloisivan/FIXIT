var mongoose = require('mongoose'),
    Gestor = mongoose.model('Gestor');

/*CREATE*/
//Insertar un nuevo gestor
exports.addGestor = function (req, res) {
    console.log('POST addGestor');

    var gestor = new Gestor(({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni: req.body.dni,
        email: req.body.email,
        password: req.body.password,
        delegacion: req.body.delegacion,
        departamento: req.body.departamento,
        telefono: req.body.telefono

    }));

    gestor.save(function (err, gestor) {
        if(err)
            return res.status(500).send(err.message);
        res.status(200).jsonp(gestor);
    })
};

/*READ*/
//Buscar todos los gestores
exports.findAllGestores = function (req, res) {
    Gestor.find(function (err, gestores) {
        if(err)
            return res.status(500).send(err.message);
        res.status(200).jsonp(gestores);
    });
};

//Buscar un gestor por id
exports.findGestorById = function (req, res) {
    Gestor.findById(req.params.id, function (err, gestor) {
        console.log('GET gestor '+req.params.id);
        if(err)
            return res.status(500).send(err.message);
        res.status(200).jsonp(gestor);
    });
};

/*UPDATE*/
//Modificar los datos de un gestor
exports.updateGestor = function (req, res) {
    Gestor.findById(req.params.id, function (err, gestor) {
        console.log('UPDATE Gestor '+req.params.id);
            gestor.nombre = req.body.nombre,
            gestor.apellidos = req.body.apellidos,
            gestor.email = req.body.email,
            gestor.password = req.body.password,
            gestor.delegacion = req.body.delegacion,
            gestor.departamento = req.body.departamento,
            gestor.telefono = req.body.telefono;

            gestor.save(function (err, gestor) {
                if(err)
                    return res.status(500).send(err.message);
                res.status(200).jsonp(gestor);
            });
    });
};

/*DELETE*/
//Eliminar un gestor a partir de su id
exports.deleteGestorById = function (req,res) {
        Gestor.findById(req.params.id, function (err, gestor) {
            console.log('DELETE Gestor '+req.params.id);
        gestor.remove(function (err) {
            if(err)
                return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};