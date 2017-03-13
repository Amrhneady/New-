var validate = function(obj) {
    for(key in obj) {
        if(obj[key] === "" || obj[key] === undefined){
            return {pass: false, failed: "You must enter " + key }
        }
    }
     return {pass: true}
}
module.exports = validate