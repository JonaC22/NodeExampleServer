// app.js 
var databaseUrl = "mydb"; 
// "username:password@example.com/myd 

//collections es un set (array) de colecciones
var collections = ["users", "reports"] 
var db = require("mongojs").connect(databaseUrl, collections); 

//query de ejemplo, la funcion callback manipula los resultados cuando se obtienen
//loguea por consola los usuarios mayores de edad
db.users.find({age > 18}, function(err, users) { if( err || !users) console.log("No adult users found"); else users.forEach( function(adultUser) { console.log(adultUser); } ); });