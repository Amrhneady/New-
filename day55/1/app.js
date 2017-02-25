var app = angular.module("myApp",[]);
app.filter("search", function(){
    return function (input, term){
        var output = [];
        for (var i=0; i< input.length; i++){
            if (input[i].name.indexOf(term) != -1)
                output.push(input[i]);
            
        }
        return output;
        
    }
});
app.controller("ctrl",function($scope){
    $scope.list =[
        {name:"Amr",
         age:25,
        },
        {name:"hiba",
         age:29,
        },
        {name:"Roro",
         age:21,
        },
        {name:"hasan",
         age:26,
        },
        
    ]
})