//requiero express, path y method-override y guardo la ejecución de express en una constante
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


//requiero los enrutadores
const indexRouter = require('./routes/indexRouter');
const detailRouter = require('./routes/detailRouter')

//configuro el motor de render ejs
app.set('view engine', 'ejs');
//configuro la carpeta que contiene las vistas
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//establezco la carpeta "public" que aloja el contenido estático
app.use(express.static(path.join(__dirname, '../public')));
//requiero method-override
app.use(methodOverride('_method'));

//configuro los prefijos y les digo qué router usar
app.use('/', indexRouter);
app.use('/detail', detailRouter)

//pongo el puerto 3000 a "escuchar" los request que le llegarán. La consola devuelve 2 mensajes avisando que está todo ok
app.listen(3000, function() {
    console.log('El servidor está corriendo en el puerto 3000')
    console.log('http://localhost:3000')
})