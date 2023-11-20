/*
● Se requiere realizar un servicio web para un registro y un inicio de sesión. El servicio recibirá un usuario y
  una contraseña, si la autenticación es correcta saldrá un mensaje de autenticación satisfactoria en caso
  contrario debe devolver error en la autenticación.
● El código debe contener comentarios
● Se debe crear el proyecto utilizando herramientas de versionamiento.
*/

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //Agregado para poder destructurar el post request

app.use(bodyParser.json());

//Abrir la pagina principal "Login"
app.get('/',(req,res)=>{
    res.send('Inicio');
})

//Para gestionar a bases de datos mongo atlas
app.use('/api/user',require('./routes/db_Users'));

app.set('json spaces',2); //configuracin de los espacion para el formato json

app.listen(30001);