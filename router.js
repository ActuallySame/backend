var Profile = require("./profile.js");

function home(req, res) {
	if(req.url === "/") {
		res.writeHead(200);
		res.write("Header\n");
		res.write("Search\n");
		res.end('Footer\n');
	}
}

function user(req, res) {
	var username = req.url.replace("/","");
	if(username.length > 0) {
		res.writeHead(200);
		res.write("Header\n");
		
		var studentProfile = new Profile("namanpriyadarshi");
		studentProfile.on("end", function(profileJSON){
			//show profile
			var values = {
				avatarUrl: ...,
				username: ...,
				badges: ...,
				javascriptPoints: ...
			}
		});

		studentProfile.on("error", function(error){
			//show error
		});


		res.write(username + "\n");
		res.end('Footer\n');
	}
}

module.exports.home = home;
module.exports.user = user;