(function(angular) {
//var app = angular.module('main',['templates','ngRoute','ngSanitize']);
var app = angular.module('main',['ngRoute','ngSanitize']);

app.config(function( $routeProvider , $locationProvider ){
	$routeProvider.when('/builder',{
		templateUrl : 'builder/getview/base.php',
		controller : 'editorController'
	})
	.otherwise({
		resolve : {
			check : function($location){
				console.log( $location.path() );
			}
		},
		template : '404'
	})

	$locationProvider.html5Mode(true);
});

app.service('getElements',function(){
	this.elemArr = ["Accordion","Audio","Bar Counters","Blog","Code","Comments","Grid Layout"];
});

app.controller('editorController',function($scope,$compile,getElements,$templateCache){
	$scope.elementsList = getElements.elemArr;
	localStorage['targetElement'] = "";

	$scope.allElements = true;
	$scope.insertTheElement = function(elementName){
		$scope.elementsListView = false;
		if( elementName == 'Grid Layout' ) {
			$scope.gridLayoutView = false;
		}
	}

	$scope.appendrows = function(gridLayout){
		$scope.elemId = Math.floor(Math.random()*1000);
		var targetElement = localStorage['targetElement'];
		var id = '';
		if( targetElement !== undefined && targetElement != '' ) {
			elemObj = JSON.parse(targetElement);
			id = '_'+elemObj.elem;
		}
		console.log(id);
		var compiledeHTML = $compile("<div row-content type='"+gridLayout+"'></div>")($scope);
      	$("#newElement"+id).append(compiledeHTML);
      	$('#emptyContent').remove();
	}

	$scope.showpopup = function(elem){
		if( elem != '' ) {
			var elemArr = elem.split('_');
			var elemObj = {
				'elem'	: elemArr[1]
			};
			localStorage['targetElement'] = JSON.stringify(elemObj);
		}
		$scope.showthepopup = true;
		$scope.elementsListView = true;
		$scope.gridLayoutView = true;
	}
	$scope.hidepopup = function(){
		$scope.elementSearch = "";
		$scope.showthepopup = false;
		$scope.elementsListView = false;
		$scope.gridLayoutView = false;
	}

	$scope.savetemplate = function(){
		alert("Saved");
	}
});

app.directive('rowContent', function() {
    return {
    	templateUrl: function(elem ,attr){
    		return 'builder/getviewss/'+attr.type+'.php'	
    	}
    };
});

})(window.angular);