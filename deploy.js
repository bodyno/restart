var exec = require('child_process').exec

module.exports = function (app) {
    app.get('/deploy', function (req, res) {
        exec('git stash && git pull', function(error, stdout, stderr) {
            res.send(stdout)
        })
    })
}