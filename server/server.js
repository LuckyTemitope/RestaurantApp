var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongo = require('mongoose');

var db = mongo.connect("mongodb+srv://lucky:lucky@cluster0.pputw.mongodb.net/restaurantApp?retryWrites=true&w=majority", (err, res) => {
    if (err) {console.log("Error Message: " + err);}
    else {
      console.log("Connected to " + db, " + ", res);
    }
})

var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

