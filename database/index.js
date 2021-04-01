const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos');



let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  owner: Object,
  watchers: Number,
  created_at: Date,
  updated_at: Date,
  hrml_url: String,
  description: String
});

let uniqueRepoIds = [];
let Repo = mongoose.model('repos', repoSchema);
// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB
mongoose.connect('mongodb://localhost:1128/repos', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true
});

let save = (userRepo) => {
   if (!uniqueRepoIds.includes(userRepo.id)) {
     uniqueRepoIds.push(userRepo.id)
     Repo.create(userRepo)
    .then((response) => {

      console.log(response + ' ADDED TO THE DATABASE')
    })
    .catch((err) => {
      console.log('ERROR ADDING ' + Repo + ' TO THE DATABASE')
    })
   } else {
     console.log('DUPLICATE ENTRY')
   }
}

module.exports.save = save;