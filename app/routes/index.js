var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);
});

module.exports = router;
