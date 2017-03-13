var express=require("express");
var mongooe = require("mongoose");
var ejs = require("ejs");
var path = require("path");
var bodyParser=require("body-parser");

// choose my port
var port= process.env.PORT  || 9099;

//setup the server
var app = express();

//step the database server
mongooe.connect("mongodb://localhost/articles", function () {
    console.log("Database is connected");
});

//inport the router 
var apiRouter = require("./routes/api.js")
app.use("./models/issue", apiRouter)


//setup server to handle html 
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\public\\views");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");


var filesRouter = require("./files.js")
app.use(filesRouter);


app.listen(port,function(){
    console.log("we are connected on port: "+port);
});

