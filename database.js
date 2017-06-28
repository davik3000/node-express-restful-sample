// database.js

const sqlite3 = require("sqlite3");
//const db = new sqlite3.Database("testDB.db");

module.exports = {
  open: function(path) {
    return new sqlite3.Database(path);
  }
  //foo: function() {
  // // do something
  //}
  //bar: function() {
  //  // do something
  //}
};

//var myFunc = function() {};
