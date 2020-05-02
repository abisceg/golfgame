const express = require('express')
const router = express.Router()
// 'out of controllers folder, pull file createPlayer.js'
const { postCreatePlayer } = require('../controllers/createPlayer')

// route middleware that will happen on every request
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
// CreatePlayer routes
router.post('/CreatePlayer',(req, res, next) => {
  console.log('from ROUTES:');
  console.log(req.body);
  postCreatePlayer(req,res,next);

})
module.exports = router
