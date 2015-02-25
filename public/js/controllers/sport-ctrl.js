var app = angular.module('benchedSports');

app.controller('sportCtrl', function($scope, postService, sportsData, $location, $routeParams) {
	
	$scope.toLogin = function() {
		$location.path('/login');
	}

	$scope.createPost = function() {
		$location.path('/post-item');
	}
	
	$scope.viewPosts = sportsData;

	switch($routeParams.sport) {
		case 'NFL': 
			$scope.title = 'NFL Home'
			// $scope.logo = '/images/nfl.png'
			break;
		case 'MLB':
			$scope.title = 'MLB Home'
			break;
		case 'NBA':
			$scope.title = 'NBA Home'
			break;
		case 'Soccer':
			$scope.title = 'Soccer Home'
			break;
		case 'Tennis':
			$scope.title = 'Tennis Home'
			break;
		case 'Cricket':
			$scope.title = 'Cricket Home'
			break;
		case 'Running':
			$scope.title = 'Running Home'
			break;
	}

})