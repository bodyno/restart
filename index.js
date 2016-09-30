var express = require('express')
var app = express()
var deployRoute = require('./deploy')(app)

app.get('/', function (req, res) {
    res.send('Deploy succeed. 2333333')
})

app.get('/.well-known/acme-challenge/Gv7XDGcBXgg4JplO42hgoPzg7280F072LHRauZTb_2Q', function (req, res) {
    res.send('Gv7XDGcBXgg4JplO42hgoPzg7280F072LHRauZTb_2Q.qScSkKLJ65swPYspzDLDAbsWen7i8BpZHiHxCCtMNoI')
})

app.listen(3000)