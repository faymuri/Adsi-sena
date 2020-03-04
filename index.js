'use strict';
// Install nodemon: npm install nodemon --save-dev
// Install express: npm install express --save
// Install dotenv: npm install dotenv
console.log("Hi there! this is Eder's architecture class");
// declaramos liberias para usar en este servidor:
const express = require('express');
// definimos el uso de app como interprete de express:
const app = express();
// declaramos el puerto del servicio 
require('dotenv').config();
const port = process.env.PORT || 3800;
const host = process.env.HOST;
// metodos y funciones:
// mensaje de bienvenida desde el servidor
app.listen(port,() => {
    console.log("Welcome to the NodeJS server, listening the port: "+port+" runing from "+host+"" +port);
    console.log("Environment variable user = "+process.env.USER);
    console.log("Environment variable password = "+process.env.PASS);
})