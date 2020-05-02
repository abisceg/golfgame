const { createGame } = require('../services/gameService')
//const { createPlayer } = playerService

// call othe rimport services, or same service
//     but diff functions here if Needed
// define post function
const postCreateGame = async (req, res, next) => {
  //const {name, email, handicap} = req.body
  try {
    /* Get data from post body*/
    console.log('From Controllers:')
    console.log(req.body);
    var date = req.body.startDate,
      gameType = req.body.gameType,
      course  = req.body.course,
      coursePar = req.body.coursePar,
      courseHolesPar = req.body.courseHolesPar,
      playerA = req.body.playerA,
      playerAScores = req.body.playerAScores,
      playerB = req.body.playerB,
      playerBScores = req.body.playerBScores,
      playerC = req.body.playerC,
      playerCScores = req.body.playerCScores,
      playerD = req.body.playerD,
      playerDScores = req.body.playerDScores

    await createGame(date,
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
    // other service call (or same service, different
    // function can go here)
   // i.e. - await generateBlogpostPreview()
   res.sendStatus(201);
   next();
 } catch(e) {
   console.log("FAILED IN Controllers")
   console.log(e.message)
   res.sendStatus(500) && next(error)
 };
};

module.exports = {
  postCreateGame
};
