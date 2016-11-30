var express = require('express')
var app = express()

app.use(express.static('tea'))

app.listen(3000, function () {
  console.log('3000')
})
