var express = require('express');
var bodyParser = require("body-parser");
var app = express();  // crud = create, read, update, delete
var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {res.sendFile( __dirname + "/" + "default.html");});

app.post('/create', function (req, res) {
var con = mysql.createConnection({ host:'localhost', user:'root',  password:'hola', database:'uno' });
mib = req.body.miBot;
did = req.body.diaId;
sta = req.body.stamp;
	if (mib == 'room') { yson = { diaId: did, room: sta } };
	if (mib == 'sleep') { yson = [{sleep:sta},{diaId:did}] };
	if (mib == 'seat') { yson = [{seat:sta},{diaId:did}] };
	con.connect();
			if (mib == 'room') {
					con.query('INSERT INTO log SET ?', yson, function(err,res) { if (err) throw err; });
			} else {
					con.query('UPDATE log SET ? WHERE ?', yson, function(err,res) { if (err) throw err; });						
			}		
	con.end();	
	res.end();
});

app.listen(80, function () {
	console.log('Todo running on port 80!');
});

