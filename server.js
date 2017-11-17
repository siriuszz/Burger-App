var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content from the "public" folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});