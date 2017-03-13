var bodyParser = require("body-parser");
//setup the Router
var express = require("express");
var apiRouter = express.Router();
//setup the database
var mongoose = require("mongoose");
var Menu = require("./menu.js");

apiRouter.use(bodyParser.urlencoded({extended: false}));
apiRouter.use(bodyParser.json());

apiRouter.get("/menu", function(req, res) {
    Menu.find({}, function(err, result) {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send({success: true, data:result})
        }
    })
})

apiRouter.get("/menu/:id", function(req, res) {
    Menu.findById(req.params.id, function(err, result) {
        if(err){
            res.status(500).send(err);
        } else if(result == undefined){
            res.status(404).send(err);
        }else {
            res.status(200).send({success: true, data:result})
        }
    })
})

apiRouter.post("/menu/", function(req, res) {
    var newMenu = new Menu(req.body);
    newMenu.save(function(err, result){
        if(err){
            res.status(404).send(err);
        }else {
            res.status(200).send({message: "Success"});
        }
    });
})

apiRouter.delete("/menu/:id", function(req, res) {
    Menu.findById(req.params.id, function(err, result) {
        if(err){
            res.status(500).send(err);
        }else if(result == undefined){
            res.status(404).send(err);
        }else {
            result.remove();
            res.status(200).send({message: "Item has been deleted"});
        }
    })
})

apiRouter.put("/menu/:id", function(req, res) {
    Menu.findById(req.params.id, function(err, result) {
        if(err){
            res.status(500).send(err);
        }else if(result == undefined){
            res.status(404).send(err);
        }else {
            for(key in req.query) {
                result[key] = req.query[key]
            }
            result.save();
            res.status(200).send({message: "Item has been updated"});
        }
    })
})
module.exports = apiRouter