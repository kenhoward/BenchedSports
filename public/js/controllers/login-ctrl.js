var app = angular.module('benchedSports');

app.controller('loginCtrl', function($scope, loginService) {
	// $scope.testLogin = 'Login ctrl works'
	$scope.loginGoogle = function() {
		loginService.google($scope)
	}
})