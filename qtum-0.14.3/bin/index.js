const express = require('express')
const app = express()

const exec = require('child_process').exec;

app.get('/', function (req, res) {
  res.send('It works!')
})

app.get('/prescribeMedication', function(req, res) {
  console.log(req)
  exec('./prescribe_medication.sh',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      res.send(stdout)
  })
})

app.get('/requestFilledPrescription', function(req, res) {
  console.log(req)
  exec('./request_filled_prescription.sh',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      res.send(stdout)
  })
})

app.get('/recordDosage', function(req, res) {
  console.log(req)
  exec('./record_dosage.sh',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      res.send(stdout)
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
