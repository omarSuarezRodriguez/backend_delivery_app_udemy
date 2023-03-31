const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const port = process.env.PORT || 3000;
app.set('port', port);

server.listen(3000, '192.168.56.1' || 'localhost', function() {
    console.log('Aplicación de NodeJS Iniciada...');
    console.log('Aplicación de NodeJS  - Proceso: ' + process.pid);
    console.log('Aplicación de NodeJS - Puerto: ' + port);
});