function HomeController($scope) {

    // TODO: Eventually move this to a database.
    $scope.projects = [
        {
            "name": "JacobBreen.com",
            "description": "Built on AngularJS, this site is designed to give you an idea of what I'm capable of creating.",
            "image": "assets/images/jacobbreen_preview.jpg",
            "url": "https://github.com/haekb/JacobBreen"
        },
        {
            "name": "HeyThere.coffee",
            "description": "An excuse to check out Google Map's API. This web application will try to find coffee shops located near you.",
            "image": "assets/images/heytherecoffee_preview.jpg",
            "url": "http://heythere.coffee"
        },
    ];


};

HomeController.$inject = ['$scope'];

app.controller('HomeController',HomeController);