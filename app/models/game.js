//Needed
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define a Schema
var gameSchema = new Schema({
  name: String,
  gametype: String,
  course: String,
  coursePar: Number,
  courseHolesPar: [Number],
  startDate: {type: Date, default: Date.now },
  playersA: {type:Schema.Types.ObjectId,ref:'email'},
  playerAscores: [Number],
  playersB: {type:Schema.Types.ObjectId,ref:'email'},
  playerBscores: [Number],
  playersC: {type:Schema.Types.ObjectId,ref:'email'},
  playerCscores: [Number],
  playersD: {type:Schema.Types.ObjectId,ref:'email'},
  playerDscores: [Number]
});

//create model to import
var game = mongoose.model('game',gameSchema);
//make available in Node apps
module.exports = game;
