'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app',['ngRoute']);
function RouteController($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'assets/partials/view1.html',
        controller: 'View1Controller'
    });

    $routeProvider.when('/view2', {
        templateUrl: 'assets/partials/view2.html',
        controller: 'View2Controller'
    });

    $routeProvider.otherwise({redirectTo: '/view1'});
};

RouteController.$inject = ['$routeProvider'];

app.config(RouteController);
function View1Controller($scope) {

};

View1Controller.$inject = ['$scope'];

app.controller('View1Controller',View1Controller);
function View2Controller($scope) {
    $scope.hello_world = 'Hallo Warld';
};

View2Controller.$inject = ['$scope'];

app.controller('View2Controller',View2Controller);