var express = require('express')
var app = express()
var deployRoute = require('./deploy')(app)

app.get('/', function (req, res) {
    res.send('Deploy succeed. 2333333')
})


app.listen(3000)