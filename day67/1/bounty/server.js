var express = require("express");
var bodyParser = require("body-parser");
var list = require("./data.js");
var vaildate = require("./utils.js");
var uuid = require("uuid");
var app = express();
var port = process.env.Port || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.get("/bounty", function (req, res) {
    res.status(200).send({
        success: true,
        data: list
    });
});
app.get("/bounty/:id", function(req, res){
     res.status(200).send({
        success: true,
        data: list[i]
    });
});
app.post("/bounty", function (req, res) {
    var data = {
        id: uuid.v4(),
        FirstName: req.body.FirstName,
        SecondName: req.body.SecondName,
        Living: req.body.Living,
        BountyAmont: req.body.BountyAmont,
        Type: req.body.Type,
    };
    var didpass = vaildate(data);
    if (didpass.pass == false) {
        res.status(404).send({
            message: didpass.message
        });
    } else {
        list.push(data);
        res.status(200).send({
            message: "success"
        });
    }
});
app.delete("/bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < list.lenght; i++) {
        if (list[i].id == id) {
            list.splice(i, 1);
            res.status(200).send({
                "message": "You have deleted this id " + id
            });
        }
    }res.status(404).send({message:"no item with this id " + id})
});
app.put("/bounty/:id", function ( req, res){
    for(var i=0; i< list.length; i++){
        if(req.params.id = list[i].id){
            list[i].FirstName = req.body.FirstName;
            list[i].SecondName = req.body.SecondName;
            list[i].Living = req.body.Living;
            list[i].BountyAmont = req.body.BountyAmont;
            list[i].Type = req.body.Type;
            res.status(200).send({"messae":"Data Base has been updated"});
        }
    }
    res.status(404).send({"message":"No such item with this id of "+ req.params.id})
})
app.listen(port, function () {
    console.log("I'm listening on" + " " + port + " " + "and an running fine")
})