var app = angular.module("myService", []);
var config = {  
    headers: {
        'X-Mashape-Key': '8f63449eec37460e9442aea33bcc84a0'
    }
};
app.service("myService", function($http) {
    this.getData = function() {
        return $http.get("https://www.googleapis.com/auth/youtubepartner"
,config)
    }
})