const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const gamerSchema = new Schema({
  nickname: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})
const Gamer = mongoose.model('Gamer', gamerSchema);
module.exports = Gamer;