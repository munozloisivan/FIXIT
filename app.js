//Dependencias que usaremos
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

//Acceso a Modelos
var avisoModel = require('./models/aviso'),
    categoriaModel = require('./models/categoria'),
    gestorModel = require('./models/gestor'),
    logroModel = require('./models/logro'),
    usuarioModel = require('./models/usuario');

//Acceso a Routers
var avisoRoutes = require('./routes/aviso'),
    categoriaRoutes = require('./routes/categoria'),
    gestorRoutes = require('./routes/gestor'),
    logroRoutes = require('./routes/logro'),
    usuarioRoutes = require('./routes/usuario');

//Utils extra
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.get('/', function(req, res) {
    res.send("Hello World!");
});
app.use(router);

//Routes
app.use('/aviso', avisoRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/gestor', gestorRoutes);
app.use('/logro', logroRoutes);
app.use('/user', usuarioRoutes);

// Connection to DB
mongoose.connect('mongodb://localhost/fixitest', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

//Start server
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});