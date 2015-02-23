var app = angular.module('benchedSports');

app.service('postService', function($http, $q) {

	this.getPosts = function(sport) {
		var deferred = $q.defer();
		$http ({
			method: 'GET',
			url: '/api/post?sport=' + sport
		}).then(function(res){
			console.log(res.data);
			deferred.resolve(res.data)
	}, function(err){
			deferred.reject(err);
	})
		return deferred.promise;
	}

	this.submitPost = function(data) {
		var deferred = $q.defer();
		$http ({
			method: 'POST',
			url: '/api/post',
			data: data
		}).then(function(res) {
			console.log(res);
			deferred.resolve(res)
		}, function(err) {
			deferred.reject(err);
		})
		return deferred.promise;
	}

})