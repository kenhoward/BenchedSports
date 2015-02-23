var app = angular.module('benchedSports');

app.controller('sportCtrl', function($scope, postService, $location) {
	
	$scope.toLogin = function() {
		$location.path('/login');
	}

	$scope.createPost = function() {
		$location.path('/post-item');
	}

	$scope.submitPost = function() {
		var post = {};
		post.title = $scope.title;
		post.body = $scope.body;
		post.sport = $scope.sport;
		post.user = $scope.user._id
		console.log(post);
		postService.submitPost(post)
	}

	$scope.getPosts = function() {
		
	}

})