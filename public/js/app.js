var app = angular.module('benchedSports', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/templates/home/home-view.html',
		controller: 'homeCtrl'
	})
	.when('/nfl', {
		templateUrl: '/templates/nfl-view.html',
		controller: 'nflCtrl'
	})	
	.when('/mlb', {
		templateUrl: '/templates/mlb-view.html',
		controller: 'mlbCtrl'
	})	
	.when('/nba', {
		templateUrl: '/templates/nba-view.html',
		controller: 'nbaCtrl'
	})	
	.when('/soccer', {
		templateUrl: '/templates/soccer-view.html',
		controller: 'soccerCtrl'
	})	
	.when('/cricket', {
		templateUrl: '/templates/cricket-view.html',
		controller: 'cricketCtrl'
	})	
	.when('/running', {
		templateUrl: '/templates/running-view.html',
		controller: 'runningCtrl'
	})
	.otherwise('/home');
})