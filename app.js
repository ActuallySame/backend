// Password hashing
var sha1 		= 	require('sha1');

// configure mongojs
var mongojs 	= 	require("mongojs")
var databaseUrl = 	"mongodb://naman:berkeley@server.compose.io:same/same"; // "username:password@example.com/mydb"
var collections = 	["users"]
var db 			= 	mongojs(databaseUrl, collections);
db.users.insert({username:"Test User",links:["absurdity.jpg","compose.jpg"]});

//build and start up the server.
var express 	= 	require("express");
var app 		= 	express();
var server 		= 	app.listen(8000, function() {
    console.log("Listening on port %d", server.address().port)
})

//Include the body-parser middleware
var bodyParser 	= 	require("body-parser");
app.use(bodyParser());
app.set("view options", {layout: false});

// Include the multer middleware for file uploads

var multer 		= 	require("multer");
var upload		= 	multer({ dest: "./public/uploads/" })
app.use(multer({ dest: './public/uploads/',
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path)
	}
}));

app.use(express.static(__dirname+"/public/"));
app.use(express.static(__dirname+"/uploads/"));

// Routing
app.get("/all", function(req, res) {
	db.users.find({}, function(err, docs) {
		res.end(JSON.stringify(docs))
	})
})
app.get("/register", function(req, res) {
	res.sendfile("./public/register.html")
})
app.post("/register",function(req,res) {
	var user_name = req.body.name
	var user_email = req.body.email;
	var user_pass = req.body.password;
	if(user_email === "" || user_pass === "" || user_pass ===""){
		res.redirect("/register");
	}

	user_pass = sha1(user_pass);
	console.log(user_email);
	console.log(user_pass);
	db.users.insert({username:user_email,password:user_pass});
	res.redirect("/");
})
app.get("/logout", function(req,res) {
	req.session.destroy();
	res.redirect("/")
})
app.get("/", function(req, res) {
	res.sendfile("./public/login.html")
})
app.post("/", function(req, res) {
	var login_email = req.body.email;
	var login_pass = req.body.password;
	if(login_email === "kanaad@berkeley.edu" || login_pass === "berkeley"){
	// 	res.redirect("/")
	// }	
	// login_pass = sha1(login_pass);
	// var result = 1//db.users.count({username:login_email,password:login_pass});
	// if(result>0){

	// 	req.session.user = login_email;
		res.redirect("/sames")
	}
	res.redirect("/");
})
app.get("/sames", function(req,res) {
	res.sendfile("./public/home.html");
})

app.post("/sames/upload", function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			return res.end("Error uploading photo.")
		} else {
			console.log("File is uploaded")
			return res.end("Great success!!!")
		}
	});
})
app.get("/sames/:id", function(req, res) {
	res.sendfile(__dirname + "/uploads/"+req.params.id);
})
