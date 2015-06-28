function ConfigService() {
    // Dev Env
    var domain = "http://jacobbreen.app";
    var apiDomain = "http://jacobbreen.api/api/v1/main/";
    // Live
    /*
    var domain = "http://www.jacobbreen.com";
    var apiDomain = "http://www.api.jacobbreen.com/api/v1/main/";
     */

    this.GetDomain = function() {
        return domain;
    }

    this.GetAPIDomain = function() {
        return apiDomain;
    }
}

app.service('ConfigService',ConfigService);