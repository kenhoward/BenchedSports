var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var session = require('express-session');
var userCtrl = require('./api/controllers/userCtrl')

var app = express ();

var port = 9001
var mongoUri = 'mongodb://localhost:27017/benchedSports'

// CONTROLLERS ===================================================================================================

// MIDDLEWARE ====================================================================================================

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
app.use(session({ secret: 'adkflj#sdB3NC43Ddk#afjk5P0R75dkj#' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy ({
	clientID: '782472847243-0tgb80rljoamjpem0e8gcqdk9fqu0ktb.apps.googleusercontent.com',
	clientSecret: 'oLRIVApDrt6qgYjIg2EsniZq',
	callbackURL: 'http://localhost:9001/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
	userCtrl.createOrUpdate(profile).then(function(user){
		// console.log(user);
		done(null, user);
	}, function(err){
		console.log(err);
		done(err, null);
	});
	
}));

// AUTHENTICATION ================================================================================================

app.get('/auth/google',
	passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

app.get('/auth/google/callback', 
	passport.authenticate('google', { failureRedirect: '/login' }),
	function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/'); // CONSIDER REDIRECTING SOMEWHERE ELSE AFTER LOGIN
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

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(403).end()
	}
	return next();
}
// app.post('/')

// CONNECTIONS ===================================================================================================

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to Server: ' + mongoUri);
});

app.listen(port, function() {
	console.log('Listening to port ' + port);
});