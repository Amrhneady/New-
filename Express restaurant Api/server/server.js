var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var ejs = require("ejs");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/restaurant");
//setup the server
var app = express();
//setup the server port
var port = process.env.Port || 8080

//import routers
var apiRouter = require("./api");
var filesRouter = require("./files");

//use the routers
app.use(apiRouter); // /menu here so i dont type it in every request
app.use(filesRouter);

//setup the server to handle json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup the server to handle html
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.listen(port, function() {
    console.log("My port is " + port)
})