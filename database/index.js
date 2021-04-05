const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/repos');



let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: {type : Number, unique: true},
  name: String,
  full_name: String,
  owner: Object,
  watchers: Number,
  created_at: Date,
  updated_at: Date,
  html_url: String,
  description: String
});

let Repo = mongoose.model('repos', repoSchema);
// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB
mongoose.connect('mongodb://localhost:1128/repos', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true
});

let save = ((userRepos) => {
  return Repo.insertMany(userRepos)
  .then((response) => {
    console.log('REPOS ADDED TO THE DATABASE')
  })
  .catch((err) => {
    console.log('DUPLICATE ENTRY TO THE DATABASE')
  })
})


let find = () => {
  return Repo.find().sort({'watchers': -1}).limit(25).exec(function(err, list) {
    if (err) {
      throw err;
    }
  })
  .then((sortedRepos) => {
      return sortedRepos;
  })
  .catch((error) =>
  {
    console.log('ERROR ON REFRESH:', error)
  })
}
module.exports.repo = Repo;
module.exports.save = save;
module.exports.find = find;