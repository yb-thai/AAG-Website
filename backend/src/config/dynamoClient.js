// backend/src/config/dynamoClient.js
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');
const { loadConfig } = require('./env');

const config = loadConfig();

const clientConfig = {
  region: config.awsRegion
};

if (config.dynamoUseLocal) {
  clientConfig.endpoint = config.dynamoEndpoint;
}

const dynamoClient = new DynamoDBClient(clientConfig);

const ddbDocClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: {
    removeUndefinedValues: true
  }
});

module.exports = {
  ddbDocClient
};
