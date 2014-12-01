<<<<<<< HEAD
//Import de Moment.js 
=======
>>>>>>> branch 'master' of https://github.com/JonaC22/NodeExampleServer.git
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
<<<<<<< HEAD
//El servidor va estar escuchando en localhost:8080
=======
>>>>>>> branch 'master' of https://github.com/JonaC22/NodeExampleServer.git
sys.puts("Server Running on 8080");
