var BlogEditor = angular.module("BlogEditor", ['ngRoute', 'pureFine']);

BlogEditor.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: '/views/menu.html',
		controller: 'NavigationController'
	})
	.when('/new-project',{
		templateUrl:'/views/new-editor.html',
		controller:'NewEditorController'
	})
	.when('/projects',{
		templateUrl:'/views/projects.html',
		controller:'ProjectsController'
	})
	.when('/new-media',{
		templateUrl:'/views/add-media.html',
		controller:'MediaController'
	})
	.when('/edit/:projectName', {
		templateUrl:'/views/editor.html',
		controller:'EditorController'
	})
	.when('/tag-library', {
		templateUrl:'/views/tags.html',
		controller:'TagController'
	})
});

BlogEditor.factory('NavSystem', function(){
	return[
		{'name':'New Project'},
		{'name':'Project List'},
		{'name':'New Media'},
		{'name':'Media List'},
		{'name':'Tag Library'},
		{'name':'Settings'},
		{'name':'Sign Out'}
		]
});


BlogEditor.directive("click", function () {
    return function(scope, element, attrs) {
        element.bind("click", function() {
            scope.toggleClass = !scope.toggleClass;
            scope.$apply();
			
        });
    };
});