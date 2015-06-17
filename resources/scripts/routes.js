function RouteController($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'assets/partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
};

RouteController.$inject = ['$routeProvider'];

app.config(RouteController);