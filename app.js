const express = require('express')
const app = express()
const port = 3000
//var mongoose = require('mongoose');
//var player = require('./app/models/players');
//var createPlayerRouter = require('./routes/index');

const router = require('./routes/index')

//const url = 'mongodb://localhost:27017/myDb'
/*
mongoose.connect('mongodb://localhost:27017/golfappdb',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Mongo Connection Error:'));
db.once('open',function(){
  console.log('BANKS OPEN');
// to support JSON-encoded bodies
app.use(express.json())
// Create Player Routine
app.post('/CreatePlayer',(req,res) => {
    // Get data from post body
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var handicap = req.body.handicap;
    console.log(name);
    console.log(email);
    console.log(handicap);
    // Create new player in mongo
    var newPlayer = new player({
      name:name,
      email:email,
      handicap: handicap
    });
    newPlayer.save(function(err){
      if (err) throw err;
      console.log('player created!');
      res.send('Player Created!');
    });
})
app.post('/HelloWorld',(req,res) => {
  res.send('HELLOWORLD!')
})
*/
//app.use('/CreatePlayer', createPlayerRouter);
app.use('/', router)
app.use(express.json())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
