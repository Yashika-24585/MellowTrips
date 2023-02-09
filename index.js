var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Wp");
var nameSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});
var User = mongoose.model("ggggg", nameSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("Details saved to database");
    })
    .catch((err) => {
      res.status(200/500).send("Unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});