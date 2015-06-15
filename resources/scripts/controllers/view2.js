function View2Controller($scope) {
    $scope.hello_world = 'Hallo Warld';
};

View2Controller.$inject = ['$scope'];

app.controller('View2Controller',View2Controller);