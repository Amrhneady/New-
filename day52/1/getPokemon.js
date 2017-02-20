var app = angular.module("getPokemon" ,[]);
app.service( "PokemonApi", function($http){
    this.getdata = function(id){
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + id)
    }
});