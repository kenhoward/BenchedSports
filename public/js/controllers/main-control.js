var app = angular.module('benchedSports');

app.controller('mainCtrl', function($scope, authService) {
	var updateUser = function(){
		authService.updateUser()
			.then(function(data){
				$scope.user = data;
			})
	}

	// updateUser();

	$scope.getUser = function() {
		authService.getUser()
			.then(function(data) {
				$scope.user = data;	
			})

	}

	$scope.getUser()

	$scope.logout = function(){
		console.log('logout')
		authService.logout()
			.then(function(data){
				// updateUser();
			})
	}
})