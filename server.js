var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;
app.use(express.static("static"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "blog.html"));
});

app.get("/article", function (req, res) {
  res.sendFile(path.join(__dirname, "article.html"));
});

app.get("/registration", function (req, res) {
  res.sendFile(path.join(__dirname, "registration.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.listen(HTTP_PORT);
