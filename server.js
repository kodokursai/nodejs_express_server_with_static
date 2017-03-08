var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/1', function (request, response) {
	response.setHeader('Content-Type', 'application/json');
	response.send({message: 'Sveikas pasauli!'});
});

app.listen(process.env.PORT || 3000);