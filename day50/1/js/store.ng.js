var storge = angular.module("storge", []);
storge.service("storge", function () {
    this.total = 0;
    this.items = [];
    this.add = function (item) {
        console.log(item)
        this.items.push(item);
        this.total += item.cost;
    }
})