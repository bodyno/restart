var express = require('express')
var app = express()
var deployRoute = require('./deploy')(app)

app.get('/', function (req, res) {
    res.send('Deploy succeed. 2333333')
})

app.get('/.well-known/acme-challenge/UUY7TkjaWKla6qRvPo-C7-GhzGSwZz-iXdivhtOcawo', function (req, res) {
    res.send('UUY7TkjaWKla6qRvPo-C7-GhzGSwZz-iXdivhtOcawo.AY-fsjIQKoAEhydRdWbJmR7tlhGEByRfZwcDTH8jAXg')
})


app.listen(3000)