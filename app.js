// Se carga modulo de express
var express = require('express');

// Se crea servidor de express
var app = express();

// Se declara constante para definir el puerto
const PORT = 8090;

// Se da acceso a los archivos que esten en la carpeta public.
// y los archivos se pueden ver en la siguiente dirección: http://localhost:8090/
// para ver el archivo index.html que esta en public es necesario poner http://localhost:8090/index.html 
app.use('/',express.static(__dirname + '/public'));

// Se maneja la primer ruta que es /, la cual equivale a http://localhost:8090/hola/
app.get ('/hola/', function(req,res){
    // Se manda un texto al navegador
    res.send('Saludos desde el servidor');
});

app.listen(PORT, function(){
    // Se muestra mensaje de exito
    console.log('Servidor ejecutandose en http://localhost:'+PORT+"/");
})