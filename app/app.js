var app = angular.module('loadingStudy', ['ngRoute', 'ngMaterial']);

app.controller('appCtrl', function () {
    var vm = this;
    
    vm.loading_time = 30;
});

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '',
            controller  : 'appCtrl'
        })
        .when('/loading1', {
            templateUrl : '../resources/partials/loading1.html',
            controller  : 'appCtrl'
        })
        .when('/loading2', {
            templateUrl : '../resources/partials/loading2.html',
            controller  : 'appCtrl'
        })
        .otherwise({
             redirectTo: '/'
         });

});	





