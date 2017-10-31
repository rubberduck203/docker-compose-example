const express = require('express')
const app = express()
const cowsay = require("cowsay");
const request = require('request');

app.get('/', function (req, res) {
    request('http://fortune:3000', function(error, response, body) {
      let moo = '<pre>' + cowsay.say({text: body}) + '</pre>';
      res.send(moo);
    });
})

app.listen(3080, function () {
  console.log('Example app listening on port 3080!')
})