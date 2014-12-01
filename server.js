
var moment = require('moment');
var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
    sys.puts("solicitud recibida");  
	response.writeHeader(200, {"Content-Type": "text/plain"});  
	response.write("Hello World! La fecha y hora actual es: ");
	response.write(moment().locale('es').format('LLLL'));  
	response.end();  
}).listen(8080);  
sys.puts("Server Running on 8080");
