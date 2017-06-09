var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var router = express.Router();

var app = express();

// all environments
app.set('port', process.env.PORT || 8082);
//app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/dbs');

var Schema = new mongoose.Schema({
    userEmail: String,
    userPassword : String
});

var user = mongoose.model('User', Schema);

app.post('/data', function(req, res){
    new user({
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword
    }).save(function(err, doc){
        if(err) res.json(err);
        else    res.send('Successfully inserted!');
    });
});

/*var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});*/

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});