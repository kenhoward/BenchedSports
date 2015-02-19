var app = angular.module('benchedSports');

app.controller('loginCtrl', function($scope, $window) {
	// $scope.testLogin = 'Login ctrl works'
	$scope.loginGoogle = function() {
		$window.location.href = '/auth/google'
	}
})