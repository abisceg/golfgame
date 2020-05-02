const { createGameDb } = require('../db/gameCreateDb')

/*
  * if you need to make calls to additional tables,
   data stores (Redis, for example),
  * or call an external endpoint as part of creating..
   the blogpost, add them to this service
*/
// Game service function definition
const createGame = async (date,
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
  try {
    console.log('From Service:');
    console.log(date,
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
    );
    return await createGameDb(date,
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
    )
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createGame
}
