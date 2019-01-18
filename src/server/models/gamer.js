const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const gamerSchema = new Schema({
  game: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  team: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  nickname: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.Boolean,
    required: false,
  },
  freeForTeam: {
    type: mongoose.Schema.Types.Boolean,
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  race: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  }
})
const Gamer = mongoose.model('Gamer', gamerSchema);
module.exports = Gamer;