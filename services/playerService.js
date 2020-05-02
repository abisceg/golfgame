const { createPlayerDb } = require('../db/playerCreateDb')

/*
  * if you need to make calls to additional tables,
   data stores (Redis, for example),
  * or call an external endpoint as part of creating..
   the blogpost, add them to this service
*/

const createPlayer = async (name, email, handicap) => {
  try {
    console.log('From Service:');
    console.log(name,email,handicap);
    return await createPlayerDb(name, email, handicap)
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createPlayer
}
