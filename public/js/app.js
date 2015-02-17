var app = angular.module('benchedSports', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates',
		controller: 'homeCtrl'
	})
})