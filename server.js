const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const base64 = require("base-64");
const utf8 = require("utf8")
var port = process.env.PORT || 8080;
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true }));
app.get("/", (req, res) => {
    res.render("index", {text: null});
});


app.post("/", (req, res) => {
    var input = req.body.input;
    var bytes = utf8.encode(input);
    var encoded = base64.encode(bytes)
    console.log(encoded);
    res.render("index", {text: encoded});


});
app.listen(port, () => [
    console.log("http://localhost:" + port)
]);