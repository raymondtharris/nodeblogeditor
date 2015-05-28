BlogEditor.controller('NewEditorController', function($scope, $http){
	$scope.alltags=[];
	$scope.newProject = {};
	$scope.newProject.tags=[];
	
	
	$http.get('/tags').success(function(data){
		$scope.alltags = data;
	});
	
	$scope.AddNewTag = function(){
		if($scope.newTag !=null){
		$scope.newProject.tags.push($scope.newTag);
		//check if already in AllTags
		var temp = {'tagName': $scope.newTag};
		var check = false;
		for(var i = 0; i< $scope.alltags.length; i++){
			if($scope.alltags[i].tagName == temp.tagName)
				check = true;		
		}
		if(check == false){
			$http.post('/tags',temp).success(function(data){});
			$http.get('/tags').success(function(data){
				$scope.alltags = data;
			});
		}
		
		$scope.newTag=null;		
		}
	}
	
	$scope.tagSuggest = function(){
		

		
	}
	
	$scope.AddNewProject = function(){
		//$scope.newProject.tags= $scope.alltags;
		console.log($scope.newProject);
		
		$http.post('projects', $scope.newProject).success(function(data){
			
		});
	}
	
	$scope.delTag = function(){
		console.log(this.tag);
		$http.post('/tagsD', this.tag).success(function(data){});
	}
	
	$scope.toggleTag = function(){
		this.projectTag = !this.projectTag;
		if(this.projectTag == true){
			$scope.newProject.tags.push(this.tag);
		}
		else{
			var itemIndex = $scope.newProject.tags.indexOf(this.tag);
			$scope.newProject.tags.splice(itemIndex,1);
			
		}
		
	}
});

BlogEditor.controller('EditorController', function($scope, $http, $routeParams){
	$scope.alltags=[];
	$scope.currProject = {};
	$scope.currProject.tags=[];
	var temp = {'name': $routeParams.projectName};
	$http.get('/getProject/'+temp.name).success(function(data){
		$scope.currProject= data[0];
	})
});
