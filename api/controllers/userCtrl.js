var User = require('../models/user');
var q = require('q');

module.exports = {
	createOrUpdate: function(googleProfile) {
		// console.log(googleProfile);
		var deferred = q.defer();
		User.findOneAndUpdate({ googleId: googleProfile.id }, {
			//match up field from schema and console log to googleProfile
			name: googleProfile.displayName,
			googleId: googleProfile.id,
			picture: googleProfile._json.picture,
		}, {upsert: true}, function(err, doc) { // upsert options pulls ONE 'doc' from collection
			if (!err) {
				deferred.resolve(doc);
			} else {
				deferred.reject(err);
			}
		})
		return deferred.promise;
	},
	getUser: function(id) {
		var deferred = q.defer();
		User.findOne({ googleId: id }, function(err, results) {
			if (err) {
				deferred.reject(err);
			} else {
				deferred.resolve(results)
			}
		})
		return deferred.promise;
	},
	put: function(req, res) {
		delete req.body._id;
		// console.log(req.body)
		User.update({ _id: req.params.id }, req.body, function(err, results) {
			console.log(err, results);
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(results);
			}
		})
	}
}