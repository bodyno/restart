var exec = require('child_process').exec

module.exports = function (app) {

    app.get('/deploy', function (req, res) {
        res.send('It works fine.')
    })

    app.post('/deploy', function (req, res) {
        exec('git stash && git pull', function(error, stdout, stderr) {
            res.send(stdout)
        })
    })

    app.post('/deploy/blog', function (req, res) {
        exec('cd /home/bodyno.github.io && git stash && git pull', function(error, stdout, stderr) {
            res.send(stdout)
        })
    })
}