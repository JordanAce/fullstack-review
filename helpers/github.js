const axios = require('axios');
const config = require('../server/config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API


  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {

    //url: 'https://api.github.com/users/JordanAce',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(`https://api.github.com/users/${username}`, options)
  .then((response) => {
    console.log('USERS GITHUB:', response.data);
  })
  .catch((error) => {
    console.log(error)
  });
}

module.exports.getReposByUsername = getReposByUsername;