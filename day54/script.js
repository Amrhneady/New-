var arr = [9, 3, 50, 20];
var largest = function (arr) {
    var sortArr = arr.sort(function (a, b) {
        return b - a;
    });
    console.log(sortArr)
    var str = sortArr.join(" ").split(" ");
    for (var i = 0; i < str.lenght; i++) {
        for (var x = i; x < str.lenght; x++) {
            for (var j = 0; j < 1; j++) {
                for (var k = 0; k < 1; k++) {
                    if (Number(str[i][j]) >= Number(str[x][k])) {
                        var temp = str[i];
                        str[i] = str[x];
                        str[x] = temp
                    }
                }
            }
        }
    }
    console.log(str.reverse().join(""));
}
largest(arr)