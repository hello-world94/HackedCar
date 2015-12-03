/**
 * Created by Alex on 12/3/2015.
 */
var express = require("express");
var app = express();
var body_parser = require("body-parser");
var cookie = require("cookie-parser");
var override = require("method-override");
var socket_io = require("socket.io");

//setup body parsing
app.use(body_parser.urlencoded({extended:false}));
//parse json
app.use(body_parser.json());

//override normal requests
app.use(override('X_HTTP_Method-Override'));

//routes
var route_io_pins = require("./routes/gpio.js")();
var route_socket = require("./routes/connection.js")();


app.get('/',function(req,res){
    res.send("Hello World");
});

app.listen(8080);