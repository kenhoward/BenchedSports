var app = angular.module('benchedSports');

app.controller('sportCtrl', function($scope, postService, sportsData, $location, $routeParams) {
	
	// $scope.toLogin = function() {
	// 	$location.path('/login');
	// }

	$scope.createPost = function() {
		$location.path('/post-item');
	}
	
	$scope.viewPosts = sportsData;

	switch($routeParams.sport) {
		case 'NFL': 
			$scope.sportTitle = 'NFL Home'
			// $scope.logo = '/images/nfl.png'
			break;
		case 'MLB':
			$scope.sportTitle = 'MLB Home'
			break;
		case 'NBA':
			$scope.sportTitle = 'NBA Home'
			break;
		case 'Soccer':
			$scope.sportTitle = 'Soccer Home'
			break;
		case 'Tennis':
			$scope.sportTitle = 'Tennis Home'
			break;
		case 'Cricket':
			$scope.sportTitle = 'Cricket Home'
			break;
		case 'Running':
			$scope.sportTitle = 'Running Home'
			break;
	}

})