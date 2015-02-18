var User = require('../models/user');
var q = require('q');

module.exports = {
	createOrUpdate: function(googleProfile) {
		console.log(googleProfile);
		var deferred = q.defer();
		User.findOneAndUpdate({ googleId: googleProfile.id }, {
			//match up field from schema to googleProfile
			name: googleProfile.displayName,
			googleId: googleProfile.id,
			picture: googleProfile._json.picture,
		}, {upsert: true}, function(err, doc) { // upsert options pulls ONE doc from collection
			if (!err) {
				deferred.resolve(doc);
			} else {
				deferred.reject(err);
			}
		})
		return deferred.promise;
	}
}