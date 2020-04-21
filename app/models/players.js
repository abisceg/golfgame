//Needed
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define a Schema
var playerSchema = new Schema({
  name: 'String',
  email: 'String',
  handicap: Number,
});

//create model to import
var players = mongoose.model('player',playerSchema);
//make available in Node apps
module.exports = players;
