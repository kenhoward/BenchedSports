var app = angular.module('benchedSports', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/templates/home-view.html',
		controller: 'homeCtrl'
	})
	.when('/nfl', {
		templateUrl: '/templates/nfl-home.html',
		controller: 'sportCtrl'
	})	
	.when('/mlb', {
		templateUrl: '/templates/mlb-home.html',
		controller: 'sportCtrl'
	})	
	.when('/nba', {
		templateUrl: '/templates/nba-home.html',
		controller: 'sportCtrl'
	})	
	.when('/soccer', {
		templateUrl: '/templates/soccer-home.html',
		controller: 'sportCtrl'
	})
	.when('/tennis', {
		templateUrl: '/templates/tennis-home.html',
		controller: 'sportCtrl'
	})	
	.when('/cricket', {
		templateUrl: '/templates/cricket-home.html',
		controller: 'sportCtrl'
	})	
	.when('/running', {
		templateUrl: '/templates/running-home.html',
		controller: 'sportCtrl'
	})
	.when('/login', {
		templateUrl: '/templates/login-home.html',
		controller: 'loginCtrl'
	})
	.otherwise('/home');
})