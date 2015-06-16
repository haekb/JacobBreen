function RouteController($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'assets/partials/home.html',
        controller: 'View1Controller'
    });

    $routeProvider.when('/view1', {
        templateUrl: 'assets/partials/view1.html',
        controller: 'View1Controller'
    });

    $routeProvider.when('/view2', {
        templateUrl: 'assets/partials/view2.html',
        controller: 'View2Controller'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
};

RouteController.$inject = ['$routeProvider'];

app.config(RouteController);