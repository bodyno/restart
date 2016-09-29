var express = require('express')
var app = express()
var deployRoute = require('./deploy')(app)

app.get('/', function (req, res) {
    res.send('Deploy succeed. 2333333')
})

app.get('/.well-known/acme-challenge/UUY7TkjaWKla6qRvPo-C7-GhzGSwZz-iXdivhtOcawo', function (req, res) {
    res.send('UUY7TkjaWKla6qRvPo-C7-GhzGSwZz-iXdivhtOcawo.AY-fsjIQKoAEhydRdWbJmR7tlhGEByRfZwcDTH8jAXg')
})

app.get('/.well-known/acme-challenge/SNF-3CjgfH6RXKMuRhanrX3fZhBO28acDfx0Cc046qI', function (req, res) {
    res.send('MKfRn7Pt5ShdtY_NqtBPr8UzUV5vW9CQunRnwoaWWyg.AY-fsjIQKoAEhydRdWbJmR7tlhGEByRfZwcDTH8jAXg')
})

app.listen(3000)