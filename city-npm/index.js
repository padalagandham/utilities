//var request = require('request');
//var request = require('requestretry');
//var jsonp = require('jsonp');
//var http = require('http');
var Client = require('node-rest-client').Client;
exports.getCity = function(req, res, next){

client = new Client();
 
// direct way 
client.get("http://http://192.168.24.16:8081/cds-rest/api/v1/", function(data, response){
            // parsed response body as js object 
            console.log(data);
            // raw response 
            console.log(response);
        });
 
			//console.log(request);
			//request(options, callback);
			//res.send("request");



	/* request('http://gd.geobytes.com/AutoCompleteCity?q=hyderabad',function(err, response, body){
	 	console.log("-----------",err);
		if (!err && response.statusCode == 200) {
			res.json(response);
		}else{
			res.json({"error":true});
		}


	}); */
	//city service
	//http://gd.geobytes.com/AutoCompleteCity?q=hyderabad
	
};


 
var options = {
  url: 'http://gd.geobytes.com/AutoCompleteCity',
  
};
 
function callback(error, response, body) {
	console.log(error);
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
   console.log(info);
   response.json(info);
  }
}
 
