const express = require("express");
const app = express();

const aPath_v1 = "/v1";
const aPath_v2 = "/v2";

var getResp = function (req, res) {
  var msg = "Hello world! Response from " + req.url;
  res.send(msg);
};

app.get(aPath_v1, getResp);
app.get(aPath_v2, getResp);

const port = 8080;
app.listen(port, function() {
  console.log("Example app listening on port", port)
});
