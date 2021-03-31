const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  owner: {
    username: String,
    userid: Number,
    link: String
  },
  watchers: Number,
  created_at: Date,
  updated_at: Date,
  hrml_url: String,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoSchema) => {

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;