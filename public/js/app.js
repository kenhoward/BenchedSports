var app = angular.module('benchedSports', ['ngRoute', 'textAngular']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/templates/home-view.html',
		controller: 'homeCtrl'
	})
	.when('/posts/:sport', {
		templateUrl: '/templates/sport-home.html',
		controller: 'sportCtrl',
		resolve: {
			sportsData: function(postService, $route) {
				return postService.getPosts($route.current.params.sport);
			}
		}
	})
	// .when('/fantasy/:sport', {
	// 	templateUrl: '/templates/sport-fantasy.html',
	// 	controller: 'fantasySports'
	// })
	// .when('/login', {
	// 	templateUrl: '/templates/login-home.html',
	// 	controller: 'loginCtrl'
	// })
	.when('/post-item', {
		templateUrl: '/templates/submit-post-view.html',
		controller: 'postCtrl'
	})
	.when('/under-construction', {
		templateUrl: '/templates/under-construction.html'
	})
	.otherwise('/home');
})

app.controller('loginCtrl', function($scope, $window) {
	// $scope.testLogin = 'Login ctrl works'
	$scope.loginGoogle = function() {
		$window.location.href = '/auth/google'
	}
})