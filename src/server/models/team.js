const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const teamSchema = new Schema({
  game: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  title: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;