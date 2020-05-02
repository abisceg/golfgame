//Needed
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define a Schema
var gameSchema = new Schema({
  gameType: String,
  course: String,
  coursePar: Number,
  courseHolesPar: [Number],
  startDate: {type: Date, default: Date.now },
  playerA: {type:Schema.Types.ObjectId,ref:'email'},
  playerAScores: [Number],
  playerB: {type:Schema.Types.ObjectId,ref:'email'},
  playerBScores: [Number],
  playerC: {type:Schema.Types.ObjectId,ref:'email'},
  playerCScores: [Number],
  playerD: {type:Schema.Types.ObjectId,ref:'email'},
  playerDScores: [Number]
});

//create model to import
var game = mongoose.model('game',gameSchema);
//make available in Node apps
module.exports = game;
