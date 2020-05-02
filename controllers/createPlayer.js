const { createPlayer } = require('../services/playerService')
//const { createPlayer } = playerService

// call othe rimport services, or same service
//     but diff functions here if Needed
// define post function
const postCreatePlayer = async (req, res, next) => {
  //const {name, email, handicap} = req.body
  try {
    /* Get data from post body*/
    console.log('From Controllers:')
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var handicap = req.body.handicap;
    await createPlayer(name, email, handicap);
    // other service call (or same service, different
    // function can go here)
   // i.e. - await generateBlogpostPreview()
   res.sendStatus(201)
   next()
 } catch(e) {
   console.log("FAILED IN Controllers")
   console.log(e.message)
   res.sendStatus(500) && next(error)
 }
}

module.exports = {
  postCreatePlayer
}
