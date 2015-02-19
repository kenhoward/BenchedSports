var app = angular.module('benchedSports');

app.service = ('loginService', function($http) { // shouldn't need $q
	this.google = function() {
		$http({
			method: 'POST',
			url: '/auth/google'
		})
	}
})