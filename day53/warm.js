var myArray = ["hello", "world", "in", "a", "frame"];
var arrayLength = myArray.length;
var printArray = function () {
    console.log( "* * * * *" )
    for (var i = 0; i < arrayLength; i++) {
    console.log("*" +myArray[i] +"*");
    console.log(" * * * * *" )
}
console.log(printArray)
function starstyle(str){
    var strArray = str.split(" ");
    var largestWord = " ";
    for (var i=0; i< strArray.length; i++){
        if (strArray[i].length < largestWord.length)
            largestWord = strArray[i];
    }
}
     