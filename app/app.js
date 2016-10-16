var app = angular.module('loadingStudy', ['ngRoute', 'ngMaterial']);

app.controller('appCtrl', function () {
    var vm = this;
    
    vm.loading_time = 30;
});

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../resources/partials/home.html',
            controller  : 'appCtrl'
        })
        .when('/loading1', {
            templateUrl : '../resources/partials/loading1.html',
            controller  : 'loading1Controller'
        })
        .when('/loading2', {
            templateUrl : '../resources/partials/loading2.html',
            controller  : 'loading2Controller'
        })
        .when('/success', {
            templateUrl: '../resources/partials/success.html'
        })
        .otherwise({
             redirectTo: '/'
         });

});	





