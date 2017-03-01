var addNum = function (a, b) {
    return a + b
};

var subNum = function (a, b) {
    return a - b
}

var multiNum = function (a, b) {
    return a * b
}

var divNum = function (a, b) {
    return a / b
}

var expoNum = function (a, b) {
    return Math.pow(a, b)
}

module.exports = {
    add: addNum,
    sub: subNum,
    multi: multiNum,
    div: divNum,
    expo: expoNum
}