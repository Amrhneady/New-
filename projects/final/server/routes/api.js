var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Issue = require("./models/issue")
var Contact = require("./models/contact")


//include the library setup the Router
var express = require("express");
var menuRoutes = express.Router();

//setup the server to handel json
apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


//get all data
apiRouter.get("/", function (req, res) {
        Issue.find({}, function (err, data) {
            if (err) {
                res.status(500).sent(err);
            } else {
                res.status(200).send({
                    success: true,
                    data: data
                })
            }
        })
    })
    //get data by id 
apiRouter.get("/:id", function (req, res) {
    Issue.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).sent(err);
        } else if (data == undefined) {
            res.status(200).send({
                "message:No such file with this id" + id
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
});

//add new data
apiRouter.post("/", function (req, res) {
    var newIsue = new Issue(req, body);
    newIsue.save(function (err, data) {
        if (err) {
            res.status(500).sent(err);
        } else {
            res.status(200).send({
                message: "sucsess"
            })
        }
    })
});
//delet data with specific id
apiRouter.delete("/:id", function (req, res) {
    //to delete the specific comment
    if (req.query.index >= 0) {
        Issue.findById(req.params.id, function (err, data) {
                if (err) {
                    res.status(500).sent(err);
                } else if (data == undefined) {
                    res.status(404).send({
                        message: "No file with this id" + id
                    })
                } else {
                    data.comments.splice(req.query.index, 1)
                    data.save(function (err, data) {
                        if (err) {
                            res.status(500).sent(err);
                        } else {
                            res.status(200).send({
                                message: "a comment has been deleted"
                            })
                        }
                    })
                }
            })
            // to delete the inter item
    } else {
        Issue.findById(req.params.id, function (err, data) {
            if (err) {
                res.status(500).sent(err);
            } else if (data == undefined) {
                res.status(404).send({
                    message: "No file with this id" + id
                })
            } else {
                data.remove(function (err, data) {
                    if (err) {
                        res.status(500).sent(err);
                    } else {
                        res.status(200).send({
                            message: "a comment has been deleted"
                        })
                    }
                })
            }
        })
    }
});

//to update the specific item 
apiRouter.put("/:id", function (req, res) {
    Issue.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            for (key in req.query) {
                if (key !== "comments") {
                    data[key] = req.query.[key];
                }
            }
            //to add a comment to comments array
            if (req.query.comments !== undefined && req.query.comments !== "") {
                data.comments.push(req.query.comments)
            }
            data.save(function (err, data) {
                if (err) {
                    res.status(500).sent(err);
                } else {
                    res.status(200).send({
                        message: "Item has been updated"
                    })
                }
            })
        }
    })
});

module.exports = menuRoutes;