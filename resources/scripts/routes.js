function RouteController($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'assets/partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'assets/partials/contact.html',
        controller: 'ContactController'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
};

RouteController.$inject = ['$routeProvider'];

app.config(RouteController);