//Import de Moment.js 
var moment = require('moment');
var sys = require("sys"),  
my_http = require("http");  
//Se crea el servidor con la funcion de respuesta a los requests 
my_http.createServer(function(request,response){  
    sys.puts("solicitud recibida");  //NOTE esto se imprime dos veces seguidas por cada requests en vez de una vez no se porque
	response.writeHeader(200, {"Content-Type": "text/plain"});  
	response.write("Hello World! La fecha y hora actual es: ");
	response.write(moment().locale('es').format('LLLL'));  
	response.end();  
}).listen(8080);  
//El servidor va estar escuchando en localhost:8080
sys.puts("Server Running on 8080");

//Introduciendo Express.js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
