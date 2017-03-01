var readlineSync = require("readlineSync");
var calculation = require("./cal.js")
var firstNum = readlineSync.question('First Number: ');
var secondNum = readlineSync.question('Second Number: ');
var typeOfOperation = readlineSync.question('type Of Operation: ');
if (typeOfOperation == "+") {
    console.log(calculation.add(parseInt(firstNum), parseInt(secondNum)))
}
if (typeOfOperation == "-") {
    console.log(calculation.sub(parseInt(firstNum), parseInt(secondNum)))
}
if (typeOfOperation == "*") {
    console.log(calculation.multi(parseInt(firstNum), parseInt(secondNum)))
}
if (typeOfOperation == "/") {
    console.log(calculation.div(parseInt(firstNum), parseInt(secondNum)))
}
if (typeOfOperation == "^") {
    console.log(calculation.expo(parseInt(firstNum), parseInt(secondNum)))
}