// Se carga modulo de express
var express = require('express');

// Se crea servidor de express
var app = express();

// Se declara constante para definir el puerto
const PORT = 8090;

// Se maneja la primer ruta que es /, la cual equivale a http://localhost:8090/
app.get('/',function(req,res){
    // Se manda un texto al navegador
    res.send('Texto desde el servidor');
});

// Se maneja la primer ruta que es /, la cual equivale a http://localhost:8090/hola/
app.get ('/hola/', function(req,res){
    // Se manda un texto al navegador
    res.send('Saludos desde el servidor');
});

app.listen(PORT, function(){
    // Se muestra mensaje de exito
    console.log('Servidor ejecutandose en http://localhost:'+PORT+"/");
})