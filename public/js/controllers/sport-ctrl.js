var app = angular.module('benchedSports');

app.controller('sportCtrl', function($scope, postService) {
	
	$scope.submitPost = function() {
		$scope.post.user = $scope.user._id
		postService.submitPost($scope.post)
	}
})