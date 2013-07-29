var mongoose = require('mongoose/'),
    restify = require('restify'),
    config = require('./config');

var mongodbPort = process.env.PORT || 8888;

// MONGODB - saves data in the database and posts data to the browser
var mongoURI = ( process.env.PORT ) ? config.creds.mongoose_auth_mongohq : config.creds.mongoose_auth_local;

db = mongoose.connect(mongoURI),
Schema = mongoose.Schema;  

// require restify and bodyParser to read Backbone.js syncs
var restify = require('restify');  

var mongodbServer = restify.createServer({
  formatters: {
    'application/json': function(req, res, body){
      if(req.params.callback){
        var callbackFunctionName = req.params.callback.replace(/[^A-Za-z0-9_\.]/g, '');
        return callbackFunctionName + "(" + JSON.stringify(body) + ");";
      } else {
        return JSON.stringify(body);
      }
    },
    'text/html': function(req, res, body){
      return body;
    }
  }
});

mongodbServer.use(restify.bodyParser());

// Create a schema for our data
var ScoreSchema = new Schema({
  playerName: String,
  score: Number,
  date: Date
});

// Use the schema to register a model
mongoose.model('Score', ScoreSchema);
var Score = mongoose.model('Score');


// This function is responsible for returning all entries for the Score model
var getScores = function(req, res, next) {
  // Resitify currently has a bug which doesn't allow you to set default headers
  // This headers comply with CORS and allow us to mongodbServer our response to any origin
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  
  console.log("mongodbServer getScores");

  Score.find().limit(20).sort('date', -1).execFind(function (arr, data) {
    res.send(data);
  });
}

var submitScore = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // Create a new score model, fill it up and save it to Mongodb
  var score = new Score(); 
  
  console.log("mongodbServer submitScore: " + req.params.score);

  score.playerName = req.params.playerName;
  score.score = req.params.score;
  score.date = new Date();
  score.save(function () {
    res.send(req.body);
  });
}

mongodbServer.listen(mongodbPort, function() {
  
  var consoleMessage = '\n MongoDb, Mongoose, Restify, and Backbone Tutorial'
  consoleMessage += '\n +++++++++++++++++++++++++++++++++++++++++++++++++++++' 
  consoleMessage += '\n\n %s your mongodbServer is listening at %s';
  consoleMessage += '\n\n open your browser to http://localhost:8888/scores \n\n';
  consoleMessage += '+++++++++++++++++++++++++++++++++++++++++++++++++++++ \n\n'  
 
  console.log(consoleMessage, mongodbServer.name, mongodbServer.url);

});

mongodbServer.get('/scores', getScores);
mongodbServer.post('/scores', submitScore);
