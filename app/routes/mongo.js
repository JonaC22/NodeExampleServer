var express = require('express');
var router = express.Router();
var databaseUrl = "mongodb://localhost/test"; 

//collections es un set (array) de colecciones
var collections = ["users", "reports"] 
var db = require("mongojs").connect(databaseUrl, collections); 

//query de ejemplo, la funcion callback manipula los resultados cuando se obtienen
//loguea por consola los usuarios masculinos
db.users.find({sex: "male"}, function(err, users) { 
  if( err || !users) console.log("No male users found"); 
  else users.forEach( function(maleUser) { 
    console.log(maleUser); 
  }); 
}); 

db.users.remove({email: "email@gmail.com"}, 
function(err){ 
  if(err) console.log("Users doesn't exists");
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

router.get('/', function(req, res) {
    db.users.find({sex: "male"}, function(err, users) { 
      if( err || !users) console.log("No male users found"); 
      else users.forEach( function(maleUser) { 
        res.send(maleUser); 
      }); 
    });
});

module.exports = router;