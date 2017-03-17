var app = angular.module("issueModule", []);
app.service("issueService", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:9099/issues/");
    };
    this.getDataById = function (id) {
        return $http.get("http://localhost:9099/issues/" + id);
    };

    this.addData = function (data) {
        return $http.post("http://localhost:9099/issues/", data);
    };

    this.deleteData = function (id) {
        return $http.delete("http://localhost:9099/issues/" + id);
    };

    this.deleteComment = function (id, index) {
        return $http.delete("http://localhost:9099/issues/" + id + "?index=" + index);
    };

    this.updateData = function (id, data) {
        var query = "?";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        };
        return $http.put("http://localhost:8080/9099/" + id + query);
    };
})