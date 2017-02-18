var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
    console.log('GET request for /');
    res.render('form.ejs');
});

app.get('/search-results', function (req, res) {
    var url = 'http://www.omdbapi.com/?s=' + req.query["term"];
    console.log('GET request for /search-results, s = ' + req.query["term"]);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('search-results.ejs', {results: JSON.parse(body)["Search"]}); 
        }
    });
});
 
app.listen(3000, function () {
    console.log('movie-app listening on port 3000!');
});