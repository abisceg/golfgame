var mongoose = require('mongoose');
var game = require('./schemas/game');
//set up mongoose Connection
mongoose.connect('mongodb://localhost:27017/golfappdb',{useNewUrlParser:true});
var db = mongoose.connection;
// create Game in db function def
const createGameDb = (date,
  gameType,
  course,
  coursePar,
  courseHolesPar,
  playerA,
  playerAScores,
  playerB,
  playerBScores,
  playerC,
  playerCScores,
  playerD,
  playerDScores,
) => {
  var newGame = new game({
      date:date,
      gameType:gameType,
      course:course,
      coursePar:coursePar,
      courseHolesPar:courseHolesPar,
      playerA:playerA,
      playerAScores:playerAScores,
      playerB:playerB,
      playerBScores:playerBScores,
      playerC:playerC,
      playerCScores:playerCScores,
      playerD:playerD,
      playerDScores:playerDScores
  });
  console.log('From DB createGameDb')
  console.log(newGame);
  newGame.save(function(err){
    if (err) throw err;
    console.log('game created!');
  });

};

module.exports = {
  createGameDb
};
