const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const gamerSchema = new Schema({
  game: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  nickname: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  captain: {
    type: mongoose.Schema.Types.Boolean,
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
})
const Gamer = mongoose.model('Gamer', gamerSchema);
module.exports = Gamer;