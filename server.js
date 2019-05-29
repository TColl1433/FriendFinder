// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");

//Sets up the Node.js body parsing middleware.

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// parse application/json. Node.js body parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

