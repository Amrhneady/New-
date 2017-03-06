var express = require("express");
var apiRouter = express.Router();
var uuid = require("uuid");


var list = require("./data.js");



apiRouter.get("/", function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({
            "messae": "here is my data",
            data: list
        })
    } else {
        var filteredData = [];
        for (key in req.que/y) {
            for (var i = 0; i < list.length; i++) {
                if (req.query[key] == list[i][key]) {
                    filteredData.push(list[i]);
                }
            }
        }
        console.log(filteredData);
        res.status(200).send({
            "messae": "here is my data",
            data: filteredData
        })
    }
});
apiRouter.post("/", function (req, res) {
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
apiRouter.delete("/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < list.lenght; i++) {
        if (list[i].id == id) {
            list.splice(i, 1);
            res.status(200).send({
                "message": "You have deleted this id " + id
            });
        }
    }
    res.status(404).send({
        message: "no item with this id " + id
    })
});
apiRouter.put("/:id", function (req, res) {

    for (var i = 0; i < list.length; i++) {
        if (list[i].id == req.params.id) {
            for (key in list[i]) {
                if (req.query[key] !== undefined && req.query[key] !== "") {
                    list[i][key] = req.query[key]
                }
            }
            res.status(200).send({
                "message": "You are updated the data"
            })
        }
    }
});

module.exports = apiRouter