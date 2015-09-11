var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var session = require('express-session');
var userCtrl = require('./api/controllers/userCtrl')
var postCtrl = require('./api/controllers/postCtrl')
var posts = require('./api/models/postSchema')


var app = express();

// instance of the router
// var adminRouter = express.Router()

var port = process.env.EXPRESS_PORT || 9001 // previously 8080
var mongoUri = 'mongodb://localhost/benchedSports'

// MIDDLEWARE ====================================================================================================

console.log(process.env)

passport.serializeUser(function(user, done){
	// console.log('serialize', user)
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	// console.log(obj)
	done(null, obj)
	// userCtrl.getUser(obj.googleId).then(function(results){
	// 	console.log('deserialize', results)
	// 	done(null, results);
	// }, function(err){
	// 	console.log(err)
	// 	done(null, err);
	// })
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SECRET ||
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy ({
	clientID: process.env.GOOGLE_CLIENT_ID || // client id reset
	clientSecret: process.env.GOOGLE_CLIENT_SECRET || // secret reset
	callbackURL: process.env.GOOGLE_CB ||
},
// HAD THIS BEFORE, testing what jaredhandson/passport does
function(accessToken, refreshToken, profile, done) {
	userCtrl.createOrUpdate(profile).then(function(user){
		// console.log(user);
		done(null, user);
	}, function(err){
		console.log(err);
		done(err, null);
	});

	}
// straight from the docs
	// function(accessToken, refreshToken, profile, done) {
	// 	userCtrl.findOrCreate({ googleId: profile.id }, function (err, user) {
	// 		return done(err, user)
	// 	})
	// }
));


// AUTHENTICATION ================================================================================================

app.get('/auth/google',
	passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

app.get('/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/'); // CONSIDER REDIRECTING SOMEWHERE ELSE AFTER LOGIN - Where they were before
});

app.get('/auth/logout', function(req, res) {
	req.logout();
	res.status(200).json(req.user);
});

app.get('/me', function(req, res) {
	// console.log(req.user)
	res.send(req.user)
})

// ENDPOINTS =====================================================================================================
// A way to post data

// query
app.get('/api/post', function(req, res) {
	var sport = req.query.sport; // query will require the '?' when doing my get request in my post service
	posts.find({ sport: sport }).populate('user').exec().then(function(response) { // .populate('user') <-- mongoose magic
		res.json(response); // sends it back to the service after the request was made
	})
})

app.post('/api/post', function(req, res) {
	// debugger; // node-debug server.js in terminal
	var newPost = new posts(req.body);
	newPost.save(function(err, post) {
		if (err) {
			return res.status(500).send(err)
		} else {
			res.status(200).end()
		}
	})
})

// app.put('/api/newBillboard', postCtrl.findOneAndUpdate);
app.delete("/api/removePost/:id", postCtrl.remove);

// CONNECTIONS ===================================================================================================

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to Server: ' + mongoUri);
});

app.listen(port, function() {
	console.log('Listening to port ' + port);
});
