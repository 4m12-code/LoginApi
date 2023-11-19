/*
● Se requiere realizar un servicio web para un registro y un inicio de sesión. El servicio recibirá un usuario y
  una contraseña, si la autenticación es correcta saldrá un mensaje de autenticación satisfactoria en caso
  contrario debe devolver error en la autenticación.
● El código debe contener comentarios
● Se debe crear el proyecto utilizando herramientas de versionamiento.
*/

const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.get('/',(req,res)=>{
    res.send("Hola mundo");
})

app.listen(30001);