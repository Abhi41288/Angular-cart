
/// <reference path="../angular.js" />


/// <reference path="Module.js" />


app.config(['$routeProvider',function ($routeProvider) {

            $routeProvider.when('/', {
                controller: 'crudController',
                templateUrl: '/A_indesx.html',
            }).when('/:res', {
                templateUrl: '/case_id.html',
                controller: 'studentController'
            }).otherwise({
                redirectTo: "/A_indesx.html"
            });
        }]);

 
//The controller is having 'crudService' dependency.
//This controller makes call to methods from the service 
app.controller('crudController', function ($scope, crudService,$location) {
   
    $scope.IsNewRecord = 1; //The flag for the new record

    loadRecords(); 

    //Function to load all Employee records
    function loadRecords() {
        var promiseGet = crudService.getEmployees(); //The MEthod Call from service

        promiseGet.then(function (pl) { $scope.Employees = pl.data;},
              function (errorPl) {
                  $log.error('failure loading Employee', errorPl);
              });
    }
    
          
            
    

    
    //Method to Get Single Employee based on EmpNo
    $scope.get = function (caseId) {
        var promiseGetSingle = crudService.get(caseId);

        promiseGetSingle.then(function (pl) {
            var res = pl.data;
                       
            $location.path('/'+res+'' );//'/student/' )//+ username)
            
        },
                  function (errorPl) {
                       console.log('failure loading Employee', errorPl);
                  });
    };
   



});

app.controller("studentController", function ($scope, $routeParams) {

    $scope.product = $routeParams.res;
});


