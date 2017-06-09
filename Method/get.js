var express = require('express');
var app = express();
var http = require('http');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "get.html" );
});

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        userEmail:req.query.userEmail,
        userPassword:req.query.userPassword
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});