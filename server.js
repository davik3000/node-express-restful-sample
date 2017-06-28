// server.js

// express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// database
//const db = require("./database");
const mongoose = require("mongoose");

// model
const Item = require("./app/models/item");

// common parameters
const rootPath = "/";
const apiPath = "/api";
const versPath = "/v1";
const itemsPath = "/items";
const port = 8080; // process.env.PORT || 8080;
const dbUri = "mongodb://localhost:27017/nodetest1";

// open db
mongoose.connect(dbUri, { useMongoClient: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function() {
    console.log("Successfully connected to the MongoDB instance");
});

// configure to use bodyParser, to get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router(); // get an instance of Router

router.use(function(req, res, next) {
    console.log("I'm receiving something");
    //console.log(req);
    next();
});

// GET
router.get(rootPath, function(req, res) {
    res.json({ message: "Welcome to our api" });
});

router.get(itemsPath, function(req, res) {
    Item.find(function(err, items) {
        if (err) {
            res.send(err);
        }
        
        res.json(items);
    });
});
// POST
router.post(itemsPath, function(req, res) {
    console.log("Received a POST request");

    var item = new Item();
    item.id = req.body.id;

    console.log("Saving item with id", item.id);

    var promise = item.save();
    console.log(promise instanceof require('mpromise'));
    promise.then(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Item created!" });
    });
});

// more routes here

// register the router
app.use(apiPath, router);

// start the server
app.listen(port);
console.log("App listening on port", port);
