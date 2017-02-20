var Data = [];
var text = ["rooooooh", "chut up", "MEEN KHALAAS"];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sortHighScore(a, b) {
    return   b.highScore  - a.highScore;
};

$("#buttonSubmit").click(function() {
    var Name = $("#name").val();
    var Game = $("#game").val();
    var Date = $("#date").val();
    var HScore = $("#score").val();
    var Trash = $("#trash:checked").val();
	if($("#trash").prop("checked")) {
        Trash1 = getRandomInt(0, text.length-1);
        console.log("with trash"+Trash1);
        newTrash = text[Trash1];
    }else {
        newTrash = [""];
    }
        
     $(".table").append("<tr class='rem'><td> " + Name + "</td><td>" + Game + "</td><td>" + Date + "</td><td>" + HScore + "</td><td>" + newTrash + "</td></tr>");
    var data = Data.push({name : Name, game : Game, date : Date, highScore : HScore, trash : newTrash});
    console.log("data"+data)
   
	$("input").val('');
}
                        );

$("#sort").click(function() {
	$('.rem').remove();
    Data.sort(sortHighScore);
var tableSorted;
    for(var i=0 ; i<Data.length ; i++) {
     tableSorted = '<tr class="rem"><td>'+Data[i].name+'</td><td>'+Data[i].game+'</td><td>'+Data[i].date+'</td><td>'+Data[i].highScore+'</td><td>'+Data[i].trash+'</td></tr>';
   $('.table').append(tableSorted);
    }
});

