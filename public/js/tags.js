BlogEditor.controller('TagController', function($scope, $http){
	$scope.tagLibrary = {};
	$http.get('/tags').success(function(data){
		$scope.tagLibrary = data;
	})
});