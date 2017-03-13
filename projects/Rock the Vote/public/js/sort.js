var app = angular.module("filterModule", []);

app.filter("sort", function() {
    return function(input) {
        var output = [];
        input.sort(function(a, b) {
            return b.upvote - a.upvote
        });
        output = input;
        return output
    }
})