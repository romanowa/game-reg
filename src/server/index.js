const express = require('express');
//const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Gamer = require('./models/gamer.js')
const app = express();
const url = 'mongodb://localhost:27017/gamers';

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json('you did it');
});

app.get('/api/gamers', function(req, res) {
  Gamer.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })

app.post('/api/gamers', function(req, res) {
  Gamer.create({
    nickname: req.body.Nickname,
    email: req.body.Email,
  }).then(gamer => {
    res.json(gamer)
  });
});

mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});

app.listen(3001, function () {
  console.log('Ready');
});