const express = require('express');
let app = express();
const helpers = require('../helpers/github.js')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  console.log('INSIDE POST' , Object.keys(req.body)[0]);
  // res.send('TEST');
  // res.end();
  helpers.getReposByUsername(Object.keys(req.body)[0]);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  //console.log('INSIDE GET')
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

