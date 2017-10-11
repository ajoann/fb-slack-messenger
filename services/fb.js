
const axios = require('axios');
const { access_token } = require('../config/fb.js');

const sendToFb = (msg, user, date) => {
  if (msg) {
    console.log('msg received in fb file', msg, user, date);
  }

  // for testing purposes:
  let users = [ 'me' ];

  for (u in users) {
    const url = 'https://graph.facebook.com/v2.6/me/messages?access_token=' + access_token;
    axios.post(url, {
      recipient: {
       "id": u
      },
     message: {
       "text": msg
     }
   })
   .then(resp => {
     console.log('fb responded with:', resp);
   })
   .catch(err => {
     console.log('3RROR in sending fb msg:', err);
   })
  }
}

module.exports = { sendToFb }
