var request = require('request');

request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  } else {
    console.log("Aww snap! Something went wrong!");
    console.log(error);
  }
});
