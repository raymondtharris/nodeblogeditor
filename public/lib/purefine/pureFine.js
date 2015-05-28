var pf =  angular.module("pureFine",[]);

pf.directive("pfLi", function(){
	return {
		restrict:'E',
		transclude:true,
		template:"<li class='li-small'><div class='li-text' ng-transclude>what is going on </div><button class='del-x' ng-click='delElement()'>X</button></li>"
	}
});

pf.directive("pfInput", function(){
	return{
		restrict:'E',
		template:"<input class='pf-textbox' type='text'/>"
	}
});

pf.directive("addButton", function(){
	return{
		restrict:'E',
		template:"<input class='pf-button' type='submit' value='Add' />"
	}
});






/** Colors **/






/*** Headers/Nav ***/
pf.directive("pfSmTop", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<div class="pf-sm-top" ng-transclude></div>'
	}
});

pf.directive("pfMedTop", function(){
	return{
		restrict:'E',
		transclude:true,
		replace:false,
		template:'<div class="pf-med-top" ng-transclude></div>'
	}
});

pf.directive("pfLgTop", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<div class="pf-lg-top" ng-transclude></div>'
	}
});

pf.directive("pfBannerSm", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<div class="pf-banner-sm" ng-transclude></div>'
	}
});
pf.directive("pfBannerMed", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<div class="pf-banner-med" ng-transclude></div>'
	}
});
pf.directive("pfBannerLg", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<div class="pf-banner-lg" ng-transclude></div>'
	}
});




/***  Custom Nav  ***/
pf.directive("pfNavButtonLong", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<button class="pf-nav-button-long" ng-transclude></button>'
	}
});
pf.directive("pfNavButtonMed", function(){
	return{
		restrict:'E',
		transclude:true,
		template:'<button class="pf-nav-button-med" ng-transclude></button>'
	}
});


