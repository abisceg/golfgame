const express = require('express')
// 'out of controllers folder, pull file createPlayer.js'
const postCreatePlayer = require('../controllers/createPlayer')
const router = express.Router()
console.log("Made it router")
// route middleware that will happen on every request
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
router.post('/CreatePlayer', postCreatePlayer)
module.exports = router
