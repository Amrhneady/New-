var storge = angular.module("storge",[]);
storge.service("storge",function(){
    this.items=[];
    this.add = function (item){
        this.items.push(item);
    }
})