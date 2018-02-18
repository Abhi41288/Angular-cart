'use strict'
///<reference path="/lib/angular.min.js"/>
var app = angular.module('Angular_cart', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider){
	
	$routeProvider.when('/', {
		controller: 'routeController',
		templateUrl: '/Angular_cart/home.html'
	}).when('/fruits', {
		controller: 'fruitController',
		templateUrl: '/Angular_cart/fruits.html'
	}).when('/Vegitable', {
		controller: 'vegitableController',
		templateUrl: '/Angular_cart/vegitable.html'
	}).when('/grocery', {
		controller: 'groceryController',
		templateUrl: '/Angular_cart/grocery.html'
	}).when('/brewages', {
		controller: 'brewagesController',
		templateUrl: '/Angular_cart/brewages.html'
	}).otherwise({
		redirectTo:"/"
	});
	
}]);

/*///<reference path="/lib/angular.min.js"/>
///<reference path="app.js"/>
*/
app.controller("routeController", function ($scope){
		
	});
	
	/*app.controller("fruitController", function ($scope, $routeParams){
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
*/

/*'use strict'
///<reference path="/lib/angular.min.js"/>
var app = angular.module('ngRout', ['ngRoute']);
 	app.config(['$routeProvider', function ($routeProvider){
 		$routeProvider.when('/Angular_cart/', {
 			controller: 'loginController',
 			templateUrl: '/Angular_cart/index.html',
 		}).when('/fruit/:username', {
 			templateUrl: '/Angular_cart/fruits.html',
 			controller: 'fruitController'
 		}).when('/vegitable/:username', {
 			templateUrl: '/Angular_cart/vegitable.html',
 			controller: 'vegitableController'
 		}).when('/grocery/:username', {
 			templateUrl: '/Angular_cart/Grocery.html',
 			controller: 'groceryController'
 		}).when('/brewages/:username', {
 			templateUrl: '/Angular_cart/Brewages.html',
 			controller: 'brewagesController'
 		}).otherwise({
 			redirectTo: "/Angular_cart/"
 		})
 	}]);*/