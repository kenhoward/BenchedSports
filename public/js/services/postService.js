var app = angular.module('benchedSports');

app.service('postService', function($http, $q, $location) {

	this.getPosts = function(sport) {
		console.log(sport)
		var deferred = $q.defer();
		$http ({
			method: 'GET',
			url: '/api/post?sport=' + sport,
		}).then(function(res){
			console.log(res.data);
			deferred.resolve(res.data)
	}, function(err){
		console.log(err)
			deferred.reject(err);
	})
		return deferred.promise;
	}

	this.submitPost = function(data) {	
		console.log('service', data)
		var deferred = $q.defer();
		$http ({
			method: 'POST',
			url: '/api/post',
			data: data
		}).then(function(res) {
			console.log(res);
			swal("Success!", "You have successfully posted!", "success")
			deferred.resolve(res)
		}, function(err) {
			console.log(err)
			sweetAlert("Oops...", "Something went wrong! Your post is missing something", "error");
			deferred.reject(err);
		})
		return deferred.promise;
	}

    this.removePost = function(post){
        var deferred = $q.defer()
        console.log(post);
        $http.delete("/api/removePost/" + post._id)
            .then(function(res){
                console.log("Post deleted: ", res);
                deferred.resolve(res.data);
            })
        return deferred.promise;
    }

    // Not Done Yet

    // this.updatePost = function(billboard){
    //     var deferred = $q.defer()
    //     $http.put("/api/newBillboard", billboard)
    //         .then(function(res){
    //             console.log("Board was updated: ", res);
    //             deferred.resolve(res.data);
    //         })
    //     return deferred.promise;
    // }    	

})