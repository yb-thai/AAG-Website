// backend/src/config/env.js
const path = require('path');
const dotenv = require('dotenv');

let loaded = false;

function loadConfig() {
  if (!loaded) {
    dotenv.config({
      path: path.resolve(process.cwd(), '.env')
    });
    loaded = true;
  }

  const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,

    awsRegion: process.env.AWS_REGION || 'us-west-2',
    dynamoEndpoint: process.env.DYNAMO_ENDPOINT || 'http://localhost:8000',
    dynamoUseLocal: process.env.DYNAMO_USE_LOCAL === 'true',

    bookingsTableName: process.env.BOOKINGS_TABLE_NAME || 'AAGC_Bookings'
  };

  return config;
}

module.exports = {
  loadConfig
};
