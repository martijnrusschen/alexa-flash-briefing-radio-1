'use strict';

module.exports.feed = (event, context, callback) => {
  const now = new Date();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      titleText: 'Radio 1 Nieuws',
      mainText: '',
      streamUrl: 'https://download.omroep.nl/nos/radionieuws/nosnieuws_bulalg.mp3',
      redirectionUrl: 'https://radio1.nl',
      updateDate: now,
      uid: now,
    }),
  };

  callback(null, response);
};
