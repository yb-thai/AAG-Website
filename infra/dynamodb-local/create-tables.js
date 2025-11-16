// infra/dynamodb-local/create-tables.js
const {
  DynamoDBClient,
  CreateTableCommand,
  ListTablesCommand
} = require('@aws-sdk/client-dynamodb');

const REGION = 'us-west-2';
const ENDPOINT = 'http://localhost:8000';
const TABLE_NAME = 'AAGC_Bookings';

const client = new DynamoDBClient({
  region: REGION,
  endpoint: ENDPOINT
});

async function tableExists(tableName) {
  const result = await client.send(new ListTablesCommand({}));
  return (result.TableNames || []).includes(tableName);
}

async function createBookingsTable() {
  const exists = await tableExists(TABLE_NAME);
  if (exists) {
    console.log(`Table "${TABLE_NAME}" already exists. Skipping creation.`);
    return;
  }

  const params = {
    TableName: TABLE_NAME,
    AttributeDefinitions: [
      {
        AttributeName: 'bookingId',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'bookingId',
        KeyType: 'HASH'
      }
    ],
    BillingMode: 'PAY_PER_REQUEST'
  };

  console.log(`Creating table "${TABLE_NAME}"...`);
  await client.send(new CreateTableCommand(params));
  console.log(`✅ Table "${TABLE_NAME}" created successfully.`);
}

createBookingsTable()
  .catch((err) => {
    console.error('Error creating tables:', err);
    process.exit(1);
  });
