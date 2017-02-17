var request = require('request');

var requestString = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22longwood%2C%20fl%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

request(requestString, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var parsedBody = JSON.parse(body);
    var channel = parsedBody["query"]["results"]["channel"];
    var temp = channel["item"]["condition"]["temp"];
    var conditions = channel["item"]["condition"]["text"];
    console.log(channel["title"]);
    console.log(temp + " degF, " + conditions);
  } else {
    console.log("Aww snap! Something went wrong!");
    console.log(error);
  }
});
