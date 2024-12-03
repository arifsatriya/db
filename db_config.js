var mysql = require('mysql');
var db = mysql.createConnection({
    host: "localhost",
    user: "agus",
    password: "123456"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
