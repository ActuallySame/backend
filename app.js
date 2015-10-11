// app.js
var databaseUrl = "mongodb://localhost/same"; // "username:password@example.com/mydb"
var collections = ["users"]
var mongojs = require("mongojs")
var db = mongojs(databaseUrl, collections);
var sha1 = require('sha1');

//build and start up the server.
var express = require("express");
var app = express();
var server = app.listen(8000, function() {
    console.log("Listening on port %d", server.address().port)
})

//Include the body-parser middlewear
var bodyParser = require("body-parser");
app.use(bodyParser());
app.set("view options", {layout: false});

app.use(express.static(__dirname+'/public/'));

app.get("/", function(req, res) {
	res.sendfile("./public/index.html")
})
app.get("/all", function(req, res) {
	db.users.find({}, function(err, docs) {
		res.end(JSON.stringify(docs))
	})
})
app.get("/register", function(req, res) {
	res.sendfile("./public/register.html")
})
app.post("/register",function(req,res) {
	var user_email = req.body.email;
	var user_pass = req.body.password;
	user_pass = sha1(user_pass);
	console.log(user_email);
	console.log(user_pass);
	db.users.insert({username:user_email,password:user_pass});
	res.redirect("/login");
})
app.get("/login", function(req, res) {
	res.sendfile("./public/login.html");
})
app.post("/login", function(req, res) {
	var login_email = req.body.email;
	var login_pass = req.body.password;
	login_pass = sha1(login_pass);
	var result = db.users.count({username:login_email,password:login_pass});
	res.redirect("/sames");
})
app.get("/sames", function(req,res) {
	res.sendfile("./public/sames.html");
})




app.use(express.static(__dirname+'/public/'));
