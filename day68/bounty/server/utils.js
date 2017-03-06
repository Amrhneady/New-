var vaildate = function (obj) {
    for (key in obj) {
        if (obj[key] === undefined || obj[key] === "") {
            return {pass: false, message: "You must fill the" + key}
        }
    }
    return {
        pass: true
    }
}
module.exports = vaildate