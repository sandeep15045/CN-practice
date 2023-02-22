var express = require('express');
var app = express();
const operations=require('./operations')
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const _ = require('lodash');



const numbers=[199,2,3,4,4]
console.log(_.nth(numbers,2));

app.get('/', function (req, res) {

    var args=process.argv.slice(2);
    console.log(args);
    console.log(operations.add(parseInt(args[0]),parseInt(args[1])))
    
      
    res.sendFile(__dirname + '/index.html');





});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(8000, function () {
    console.log('Node server is running..');
});