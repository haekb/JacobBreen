function HomeController($scope, DataFactory) {

    // TODO: Eventually move this to a database.
    /*
    $scope.projects = [
        {
            "name": "JacobBreen.com",
            "description": "Hey, this looks familiar. Built on AngularJS, this site is designed to give you an idea of what I'm capable of creating.",
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
    */
    $scope.projects = [];

    $scope.email = "general@jacobbreen.com";

    $scope.about = {
        "web": "With experience in PHP, Python, MySQL, JavaScript, and various Linux distros. Along with technologies and frameworks such as <a href=\"http://laravel.com/\">Laravel</a>, <a href=\"https://angularjs.org/\">AngularJS</a>, and <a href=\"http://www.tornadoweb.org/en/stable/\">Tornado</a>. I have built many web projects / web applications over the years. And I strive to continue to learn new technologies and programming languages in my spare time.",
        "game": "With my experience in C, C++, and UnrealScript, I've created/contributed to game patches/updates. I specialize in dealing with adding widescreen and/or multiple monitor support to old video games."
    };

    $scope.projectPromise = DataFactory.GetProjects();

    // TODO: Hide page until data is loaded.
    $scope.projectPromise.success(function(data){
        if(data.status == "success") {
            $scope.projects = data.results;
        } else {
            console.error("API failed!");
        }
        console.info(data);
    });


};

HomeController.$inject = ['$scope','DataFactory'];

app.controller('HomeController',HomeController);