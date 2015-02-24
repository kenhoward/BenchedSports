var app = angular.module('benchedSports');

app.service('postService', function($http, $q, $location) {

	this.getPosts = function(sport) {
		console.log(sport)
		var deferred = $q.defer();
		$http ({
			method: 'GET',
			url: '/api/post?sport=' + sport,
		}).then(function(res){
			console.log(res.data);
			deferred.resolve(res.data)
	}, function(err){
		console.log(err)
			deferred.reject(err);
	})
		return deferred.promise;
	}

	this.submitPost = function(data) {	
		console.log('service', data)
		var deferred = $q.defer();
		$http ({
			method: 'POST',
			url: '/api/post',
			data: data
		}).then(function(res) {
			console.log(res);
			deferred.resolve(res)
		}, function(err) {
			console.log(err)
			deferred.reject(err);
		})
		return deferred.promise;
	}

})