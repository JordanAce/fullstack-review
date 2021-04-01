const axios = require('axios');
const config = require('../server/config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  let userRepos = [];
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(`https://api.github.com/users/${username}/repos`, options)
  .then(function(response) {
    for (var key in response.data) {
      userRepos.push(response.data[key]);
    }
    //console.log(userRepos);
    return userRepos;
  })
  .catch((error) => {
    console.log('ERROR ON GITHUB GET REQUEST:', error)
  });
}

module.exports.getReposByUsername = getReposByUsername;