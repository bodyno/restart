var express = require('express')
var app = express()
var deployRoute = require('./deploy')(app)

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.listen(3000)