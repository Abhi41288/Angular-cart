///<reference path="/lib/angular.min.js"/>
///<reference path="app.js"/>

app.controller("routeController", function ($scope, $location){
 		$scope.openCity0 = function(username){
 			alert("controller hit");
 			$location.path('/fruit/' + username)
 		};
 	});
 	
 	app.controller("fruitController", function ($scope, $routeParams){
 		$scope.username = $routeParams.username;
 	});
 	
 	app.controller("vegitableController", function ($scope, $location){
 		$scope.openCity1 = function(username){
 			$location.path('/vegitable/' + username)
 		};
 	});
 	
 	app.controller("vegitableController", function ($scope, $routeParams){
 		$scope.username = $routeParams.username;
 	});
 	
 	app.controller("groceryController", function ($scope, $location){
 		$scope.openCity2 = function(username){
 			$location.path('/grocery/' + username)
 		};
 	});
 	
 	app.controller("groceryController", function ($scope, $routeParams){
 		$scope.username = $routeParams.username;
 	});
 	
 	app.controller("brewagesController", function ($scope, $location){
 		$scope.openCity3 = function(username){
 			$location.path('/brewages/' + username)
 		};
 	});
 	
 	app.controller("brewagesController", function ($scope, $routeParams){
 		$scope.username = $routeParams.username;
 	});