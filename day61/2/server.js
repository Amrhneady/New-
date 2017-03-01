var express = require("express");
var app = express();
var PORT = process.env.PORT || 8888;
app.get("./"function (req, res) {
    res.send("hello");
})
app.lesten(PORT, function () {
    console.log("I'm listening on" + PORT + "and an running fine")
});