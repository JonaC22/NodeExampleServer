// app.js 
var databaseUrl = "mydb"; 
// "username:password@example.com/myd 
var collections = ["users", "reports"] var db = require("mongojs").connect(databaseUrl, collections);