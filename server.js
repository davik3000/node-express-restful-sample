// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const rootPath = "/";
const apiPath = "/api";
const versPath = "/v1";
const port = 8080; // process.env.PORT || 8080;

// configure to use bodyParser, to get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router(); // get an instance of Router

router.get(rootPath, function(req, res) {
    res.json({ message: "Welcome to our api" } );
});

// more routes here

// register the router
app.use(apiPath, router);

// start the server
app.listen(port);
console.log("App listening on port", port);
