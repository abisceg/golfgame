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

  // Open db
  db.on('error', console.error.bind(console,'Mongo Connection Error:'));
  db.once('open',function(){
    console.log('BANKS OPEN');


      newPlayer.save(function(err){
        if (err) throw err;
        console.log('player created!');
      });
    //}
  })



};

module.exports = {
  createPlayerDb
}
