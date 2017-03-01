var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extende: false}));
app.use(bodyParser.json());

var students = [
    {
        "name":"Amr",
        "age":24,
        "IsLive": true
    },
    {
        "name":"nader",
        "age":23,
        "IsLive": false
    },
    {
        "name":"Sara",
        "age":21,
        "IsLive": true
    }
]
app.get("/",function(req, res) {
    res.send(students);
})
app.post("/", function(req,res) {
    students.push(req.body);
    res.status(200).send("hi,I was sended");
});
app.listen(PORT, function () {
    console.log("I'm listening on" + PORT + "and an running fine")
});
