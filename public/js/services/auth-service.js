var app = angular.module('benchedSports');

app.service('authService', function($http){

	var user = {};

	this.updateUser = function(){
		console.log('Use getUser')
		// return $http({
		// 	method: 'GET',
		// 	url: '/auth/me'
		// }).then(function(res){
		// 	user = res.data;
		// 	console.log('User updated: ', user);
		// 	return user;
		// })
	}

	this.getUser = function(){
		return $http({
			method: 'GET',
			url: '/me'
		}).then(function(res){
			console.log(res)
			return res.data;
		})
	}

	this.logout = function(){
		return $http({
			method: 'GET',
			url: '/auth/logout'
		}).then(function(res){
			return res.data;
		})
	}

})