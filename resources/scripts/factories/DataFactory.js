function DataFactory ($http, ConfigService) {

    var domain = ConfigService.GetDomain();
    var apiDomain = ConfigService.GetAPIDomain();

    // Simple GET request example :

    var getProjects = function () {
        return $http({
            url: apiDomain+'project/get',
            method: 'GET'
        })
    };


    return {
        GetProjects : function () {
            return getProjects();
        }
    }
}

DataFactory.$inject = ['$http','ConfigService'];

app.factory("DataFactory", DataFactory);