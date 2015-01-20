// app.js 
var databaseUrl = "mydb"; 
// "username:password@example.com/myd 

//collections es un set (array) de colecciones
var collections = ["users", "reports"] 
var db = require("mongojs").connect(databaseUrl, collections); 

//query de ejemplo, la funcion callback manipula los resultados cuando se obtienen
//loguea por consola los usuarios masculinos
//remove, en vez de find, para eliminar
db.users.find({sex: "male"}, function(err, users) { 
  if( err || !users) console.log("No male users found"); 
  else users.forEach( function(maleUser) { 
    console.log(maleUser); 
  }); 
}); 

//ejemplo de insertar un nuevo usuario
db.users.save({email: "email@gmail.com", password: "mongo", sex: "male"}, function(err, saved) { 
  if( err || !saved ) console.log("User not saved"); 
  else console.log("User saved"); 
}); 

//ejemplo de actualizacion de password de un usuario
db.users.update({email: "email@gmail.com"}, 
{$set: {password: "mongodb"}}, 
function(err,updated){
  if( err || !updated ) console.log("User not updated"); 
  else console.log("User updated"); 
});