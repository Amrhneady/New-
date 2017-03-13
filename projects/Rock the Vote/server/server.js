var express = require("express");
var mongoose = require("mongoose");
var ejs = require("ejs");
var path = require("path");

//setup the port
var port = process.env.Port || 8080;

//setup the server
var app = express();

//setup the database server
mongoose.connect("mongodb://localhost/articles");
//import the router
var apiRouter = require("./api.js");
app.use("/issues", apiRouter);

//setup server to handle html
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

//import the files for the index
var filesRouter = require("./files.js");
app.use(filesRouter);

app.listen(port, function(){
    console.log("I'm listening at port " + port);
})