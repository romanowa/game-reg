const express = require('express');
//const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Gamer = require('./models/gamer.js');
const Team = require('./models/team.js');
const app = express();
const url = 'mongodb://localhost:27017/gamers';
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {
  res.json('you did it');
});

app.get('/api/gamers', function(req, res) {
  Gamer.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })

app.get('/api/teams', function(req, res) {
  Team.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })

app.post('/api/gamers', function(req, res) {
  Gamer.create({
    nickname: req.body.nickname,
    email: req.body.email,
  }).then(gamer => {
    res.json(gamer)
  });
});

app.post('/api/teams', function(req, res) {
  Team.create({
    title: req.body.title,
    captain: req.body.captain,
  }).then(team => {
    res.json(team)
  });
  /*Gamer.create({
    nickname: req.body.nickname,
    email: req.body.email,
    team: req.body.team,
    captain: req.body.nickname == req.body.captain,
    comment: req.body.comment,
  }).then(gamer => {
    res.json(gamer)
  });*/
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