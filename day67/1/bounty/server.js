var express = require("express");
var bodyParser = require("body-parser");
var data = require("./data.js");
var uuid = require("uuid");
var app = express();
var port = process.env.Port || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.get("/bounty", function (req, res) {
    res.status(200).send(data);
});
app.post("/bounty", function (req, res) {
    if (req.body.firstName == undefined || req.body.firstName == "") {
        res.status(400).send({
            "message": "Must have a first Name"
        });
    } else if (req.body.secondName == undefined || req.body.secondName == "") {
        res.status(400).send({
            "message": "Must have a second Name"
        });
    } else if (req.body.Living == undefined || req.body.Living == "") {
        res.status(400).send({
            "message": "Must have tell us if he is  Living"
        })
    } else if (req.body.bountyAmont == undefined || req.body.bountyAmont == "") {
        res.status(400).send({
            "message": "Must have a tell us the amount"
        })
    } else if (req.body.type == undefined || req.body.type == "") {
        res.status(400).send({
            "message": "Must choose the type"
        })
    } else {
        var list = {
            id: uuid.v4(),
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            Living: req.body.Living,
            Living: req.body.firstname,
            bountyAmont: req.body.bountyAmont,
            type: req.body.type,
        }

        data.push(list);
        res.status(200).send("hi,I was sended");
    }

});
app.delete("/bounty/:id", function(req,res){
    var id = req.params.id;
    for (var i=0; i< data.lenght; i++){
        if(list[i].id == id){
            list.splice(i, 1);
            res.status(200).send({"message": "You have deleted this id" + id});
        }
    }
})
app.listen(port, function () {
    console.log("I'm listening on" + port + "and an running fine")
})