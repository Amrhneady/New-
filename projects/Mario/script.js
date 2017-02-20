document.getElementById("submit1").addEventListener("click",function(){
    var worth1 = document.getElementById("firstWorth").innerHTML;
    var amount1 = document.getElementById("firstEnemy").value;
    document.getElementById("firstResult").value = worth1 * amount1
    totalSum();
});
document.getElementById("submit2").addEventListener("click",function(){
    var worth2 = document.getElementById("secondWorth").innerHTML;
    var amount2 = document.getElementById("secindEnemy").value;
    document.getElementById("secondResult").value = worth2 * amount2
    totalSum();
});
document.getElementById("submit3").addEventListener("click",function(){
    var worth3 = document.getElementById("thirdWorth").innerHTML;
    var amount3 = document.getElementById("thirdEnemy").value;
    document.getElementById("thirdResult").value = worth3 * amount3;
    totalSum();
    
});


var totalSum = function(){
    var one = document.getElementById("firstResult").value;
    var second = document.getElementById("secondResult").value;
    var third = document.getElementById("thirdResult").value;
    document.getElementById("finalResult").value = Number(one) + Number(second) + Number(third)
}
