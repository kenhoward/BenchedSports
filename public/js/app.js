var app = angular.module('benchedSports', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/templates/home-view.html',
		controller: 'homeCtrl'
	})
	.when('/nfl', {
		templateUrl: '/templates/nfl-home.html',
		controller: 'nflCtrl'
	})	
	.when('/mlb', {
		templateUrl: '/templates/mlb-home.html',
		controller: 'mlbCtrl'
	})	
	.when('/nba', {
		templateUrl: '/templates/nba-home.html',
		controller: 'nbaCtrl'
	})	
	.when('/soccer', {
		templateUrl: '/templates/soccer-home.html',
		controller: 'soccerCtrl'
	})
	.when('/tennis', {
		templateUrl: '/templates/tennis-home.html',
		controller: 'tennisCtrl'
	})	
	.when('/cricket', {
		templateUrl: '/templates/cricket-home.html',
		controller: 'cricketCtrl'
	})	
	.when('/running', {
		templateUrl: '/templates/running-home.html',
		controller: 'runningCtrl'
	})
	.when('/login', {
		templateUrl: '/templates/login-home.html',
		controller: 'loginCtrl'
	})
	.otherwise('/home');
})