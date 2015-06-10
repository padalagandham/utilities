var express = require('express');
var http = require('http');
var weather = require('./weather-npm');
var cityService = require("./city-npm");
var app = express();


// respond with "Hello World!" on the homepage
app.get('/favicon.ico', function (req, res) {
  console.log('/favicon.ico');
});

app.get('/', function (req, res) {
  res.render('index.html');
  //console.log(weather.getFromCity('Hyderabad'));
});

app.get('/getcity', function (req, res, next) {
 	
 	cityService.getCity(req, res, next); 

});

// access
app.use(express.static(__dirname + '/web')); 

// view engine
app.set('views', __dirname + '/web');
app.engine('html', require('ejs').renderFile);

http.createServer(app).listen(80);

app.get('/add', function (req, res) {
  	 http.request("http://api.hostip.info/get_json.php", function(res) {
  	 	console.log(res);
  	 });
});

/*

var server = app.listen(4040, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('server is listening to ', host, port);

});

*/