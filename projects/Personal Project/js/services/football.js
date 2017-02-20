var app = angular.module("footballModule", []);
var config = {  
    headers: {
        'X-Mashape-Key': '8f63449eec37460e9442aea33bcc84a0'
    }
};
app.service("footballService", function($http) {
    this.getData = function() {
        return $http.get("http://api.football-data.org/v1/competitions/?season=2015",config)
    }
})