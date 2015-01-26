//mongoose.js 
//abstrae la creacion de modelos, al estilo ORM
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' }); 
kitty.save(function (err) { 
  if (err) // ... 
  console.log('meow'); 
});

router.get('/', function(req, res) {
  var query  = Cat.where({ name : 'Zildjian' });
  query.findOne(function (err, kitten) {
	  if (err) return handleError(err);
	  if (kitten) {
	    res.send(kitten);
	  }
  });
});

module.exports = router;