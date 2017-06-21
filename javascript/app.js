var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'pug');
var test = "Test";



app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: test });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});