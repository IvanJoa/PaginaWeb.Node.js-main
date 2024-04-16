// const express = require('express')
import  express  from "express";
import router from "./routes/index.js";
import db from "./config/db.js"

const app = express();


//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de Datos conectada correctamente'))
    .catch( (error) => console.log(error))

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug')

app.use(express.static('public'))

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.paginaNombre = "Agencias de Viajes"

    return next();
})

//agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})


