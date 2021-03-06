var exec = require('child_process').exec

module.exports = function (app) {

  app.get('/deploy', function (req, res) {
    res.send('It works very fine.')
  })

  app.post('/deploy', function (req, res) {
    exec('git stash && git pull', function (error, stdout, stderr) {
      res.send(stdout)
    })
  })

  app.all('/deploy/blog', function (req, res) {
    exec('cd /home/bodyno.github.io && git stash && git pull', function (error, stdout, stderr) {
      if (error) {
        res.send(error + stderr)
      } else {
        res.send(stdout)
      }
    })
  })

  app.all('/deploy/examination', function (req, res) {
    exec('cd /home/examination && git stash && git pull', function (error, stdout, stderr) {
      if (error) {
        res.send(error + stderr)
      } else {
        res.send(stdout)
      }
    })
  })

}
