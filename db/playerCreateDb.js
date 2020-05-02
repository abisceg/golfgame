var mongoose = require('mongoose');
var player = require('./schemas/players');
//set up mongoose Connection
mongoose.connect('mongodb://localhost:27017/golfappdb',{useNewUrlParser:true});
var db = mongoose.connection;

const createPlayerDb = (name, email, handicap) => {
  var newPlayer = new player({
    name:name,
    email:email,
    handicap: handicap
  });
  console.log('From DB createPlayerDb')
  console.log(newPlayer);
  newPlayer.save(function(err){
    if (err) throw err;
    console.log('player created!');
  });

};

module.exports = {
  createPlayerDb
};
