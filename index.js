const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
    port: "3306"
});

connection.connect((err) => {
    if(err){
        throw err;
    }
    else{
        console.log("Conectado")
    }
});

connection.query("SELECT * FROM producto;", function(err, results, campos){
    if(err){
        throw err;
    }
    else{
        results.forEach(element => {
            console.log(element);
        });
    }
});

const port = process.env.PORT || 5000;
app.listen(port)

console.log("App is listening on port " + port)