const mongoose = require('mongoose');

const soldierSchema = new mongoose.Schema({
  name: String,
  level: Number,
  xp_max: String,
  xp_min: String,
  weapons_min: Number,
  weapons_max: Number,
  kits_min: Number,
  kits_max: Number,
  vehicles_min: Number,
  vehicles_max: Number,
  medals_min: Number,
  medals_max: Number,
  assignment_min: Number,
  assignment_max: Number,
  tags_min: Number,
  tags_max: Number,
  wins: Number,
  score: Number,
  kills: Number,
  tank_name: String,
  ar_name: String,
  util_name: String,
  pistol_name: String,
  tank_kills: Number,
  ar_kills: Number,
  util_score: Boolean,
  pistol_kills: Number,
});

const Soldier = mongoose.model('Soldier', soldierSchema);

module.exports = Soldier;