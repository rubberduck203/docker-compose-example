const express = require('express')
const app = express()
const quote = require('prog-quote')()

app.get('/', function (req, res) {
    res.send(quote.next().value.quote);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})