var MongoClient require( mongodb ).MongoClient , format = require('util').format;

 MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, if(err) throw err;

 db.collection('test').findAndModify( {hello: 'world'}, // query [['_id','asc']], // sort order {$set: {hi: 'there'}}, // replacement, replaces only the field " {}, // options function(err, object) { if (err){ console.warn(err.message); // returns error if no match }else{ console.dir(object); } }); });