const express = require('express');
//const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Gamer = require('./models/gamer.js');
const app = express();
const url = 'mongodb://localhost:27017/gamers';
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {
  res.json('you did it');
});

app.get('/api/gamers', function(req, res) {
  if (req.query.game && req.query.team) {
    Gamer.find({ game: req.query.game, team: req.query.team }).then(eachOne => {
      res.json(eachOne);
    });
  } else if (req.query.game) {
    Gamer.find({ game: req.query.game }).then(eachOne => {
      res.json(eachOne);
    });
  } else if (req.query.freeForTeam) {
    Gamer.find({ freeForTeam: true }).then(eachOne => {
      res.json(eachOne);
    });
  }
});

app.post('/api/gamers', function(req, res) {
  console.log(req)
  if (Array.isArray(req.body)) {
    Gamer.find({ game: req.body[0].game, team: req.body[0].team })
      .then(gamers => {
        const teams = [...new Set(gamers.map(item => item.team))];
        if (teams.includes(req.body[0].team)) {
          console.log('--------------------- OOOPPPSSSSSSS')
          return false
        }
        return true
      })
      .then((ress) => {
        if (!ress) {
          console.log('&&&&&&&')
          res.send({ error: 'INVALID_TEAM_TITLE' })
        } else {
          console.log('------ ELSEEEEEEE')
          Gamer.insertMany(req.body)
            .then(result => {
              res.json(result)
          })
        }
      })
  } else {
    Gamer.create({
      game: req.body.game,
      nickname: req.body.nickname,
      email: req.body.email,
      captain: req.body.captain,
      freeForTeam: req.body.freeForTeam,
      race: req.body.race,
      comment: req.body.comment,
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