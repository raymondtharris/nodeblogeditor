BlogEditor.controller('ProjectsController', function($scope, $http,$location){
	$scope.projectList=[];
	

	$http.get('/getProjects').success(function(data){
		$scope.projectList = data;
	});
	$scope.editProject = function(){
		//send to edit page
		console.log(this.proj.name);
		$location.path('/edit/'+this.proj.name);
	}
	$scope.deleteProject = function(){
		//deleteing Project from db
		console.log(this.proj._id);
		var temp = {'_id':this.proj._id};
		$http.post('/delProj', temp).success(function(data){});
	}
});