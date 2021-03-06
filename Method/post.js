var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var parser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "post.html" );
})

app.post('/process_post', parser, function (req, res) {
    // Prepare output in JSON format
    response = {
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})