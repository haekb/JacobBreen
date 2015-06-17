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
        {
            "name": "Websocket Servers",
            "description": "With various projects, I was required to build Websocket Server in PHP/Python, as well as the client side JavaScript for instant two way connection with the client and server.",
            "image": "assets/images/html5_preview.jpg"
        },
    ];

    $scope.email = "general@jacobbreen.com";


};

HomeController.$inject = ['$scope'];

app.controller('HomeController',HomeController);