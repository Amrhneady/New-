var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var vaildate = require("./utils.js");
var ejs = require("ejs");



//setup the server
var app = express();

//setup the server port
var port = process.env.Port || 8080;

//import the router
var apiRouter = require("./api");
var fileRouter = require("./files");


//use the routers
app.use("/bounty", apiRouter);
app.use(fileRouter);

//setup the server to handel json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//setup the server to handle html
app.use(express.static(path.join(__dirname + "//..//public")));
app.set("views", __dirname + "//..//public//views");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.listen(port, function () {
    console.log("I'm listening on" + " " + port + " " + "and an running fine")
});