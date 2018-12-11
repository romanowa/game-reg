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
  if (req.query.game) {

    /*Gamer.aggregate([
      { $match : { game : req.query.game }},
      { $group : {_id : "$team"}}]).then(eachOne => {
    res.json(eachOne);*/




    Gamer.find({ game: req.query.game }).then(eachOne => {
    res.json(eachOne);
    });
  } else if(req.query.team) {
    console.log('==========GAMER REQQ', req.query.team)
    Gamer.find({ team: req.query.team }).then(eachOne => {
    res.json(eachOne);
    })
  }


  });


app.get('/api/teams', function(req, res) {
  Team.find({ game: req.query.game}).then(eachOne => {
    console.log('£££££', Array.isArray(eachOne))
    res.send(eachOne);
    })
  })

app.post('/api/gamers', function(req, res) {
  console.log('$-$-$-$-', req.body)
  if (Array.isArray(req.body)) {
    Gamer.insertMany( req.body )
    .then(result => {
      res.json(result)
    })
  } else {
    Gamer.create({
      game: req.body.game,
      nickname: req.body.nickname,
      email: req.body.email,
      captain: req.body.captain,
      freeForTeam: req.body.freeForTeam
    })
    .then(result => {
      res.json(result)
    })
  }
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