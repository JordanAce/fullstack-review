const express = require('express');
let app = express();
const helpers = require('../helpers/github.js')
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let currentUser = Object.keys(req.body)[0]
  console.log('INSIDE POST');
  helpers.getReposByUsername(currentUser)
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      db.save(data[i]);
      console.log('DATA RECEIVED:', data[i].id)
    }
  })
  .catch(error => {
    console.log('ERROR POSTING REPOS:', error);
  })
});

app.get('/repos', function (req, res) {
  db.find()
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      return res[i].model._doc
    }
  })
  .catch(error => {
    console.log('ERROR ON REFRESH:', error)
  })

    // TODO - your code here!
    // This route should send back the top 25 repos
});
let port = 1128;


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


