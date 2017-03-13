var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Issue = require("./issues.js");

//setup server Router
var express = require("express");
var apiRouter = express.Router();

//setup server to handle json
apiRouter.use(bodyParser.urlencoded({extended: false}));
apiRouter.use(bodyParser.json());

//get all data
apiRouter.get("/", function(req, res){
    Issue.find({}, function(err, data) {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send({success: true, data: data})
        }
    })
});

//get data by id
apiRouter.get("/:id", function(req, res){
    Issue.findById(req.params.id, function(err, data) {
        if(err){
            res.status(500).send(err);
        }else if(data == undefined) {
            res.status(200).send({message: "No such file with this id"})
        }else {
            res.status(200).send({success: true, data: data})
        }
    })
});

//add new data
apiRouter.post("/", function(req, res){
    var newIssue = new Issue(req.body);
    newIssue.save(function(err, data){
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send({message: "Success"});
        }
    })
});

//delete data with specific id
apiRouter.delete("/:id", function(req, res){
    //to delete a specific comment
    if(req.query.index >= 0) {
        Issue.findById(req.params.id, function(err, data) {
            if(err){
                res.status(500).send(err);
            }else if(data == undefined) {
                res.status(404).send({message: "No file the this id"});
            }else{
                data.comments.splice(req.query.index, 1);
                data.save(function(err, data) {
                    if(err){
                        res.status(500).send(err);
                    }else {
                        res.status(200).send({message: "a comment has been deleted"});
                    }
                });
            }
        })
        // to delete the entire item
    }else {
        Issue.findById(req.params.id, function(err, data) {
            if(err){
                res.status(500).send(err);
            }else if(data == undefined) {
                res.status(404).send({message: "No file the this id"});
            }else{
                data.remove(function(err, data) {
                    if(err){
                        res.status(500).send(err);
                    }else {
                        res.status(200).send({message: "An item has been deleted"});
                    }
                });
            }
        }) 
    }
})

//to update a specific item
apiRouter.put("/:id", function(req, res){
    Issue.findById(req.params.id, function(err, data) {
        if(err){
            res.status(400).send(err);
        }else {
            for(key in req.query) {
                if(key !== "comments"){
                    data[key] = req.query[key];
                }
            }
            //to add a comment to comments array
            if(req.query.comments !== undefined && req.query.comments !== "") {
                data.comments.push(req.query.comments);
            }
            data.save(function(err, data) {
                if(err){
                    res.status(500).send(err);
                }else {
                    res.status(200).send({message: "Item has been updated"});
                }
            });
        }
    })
})

module.exports = apiRouter;