// infra/dynamodb-local/seed-bookings.js
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');

const REGION = 'us-west-2';
const ENDPOINT = 'http://localhost:8000';
const TABLE_NAME = 'AAGC_Bookings';

const ddbClient = new DynamoDBClient({
  region: REGION,
  endpoint: ENDPOINT
});

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions: { removeUndefinedValues: true }
});

async function seed() {
  const now = new Date().toISOString();

  const items = [
    {
      bookingId: `BK_${uuidv4()}`,
      patientName: 'Test Patient 1',
      phone: '555-111-2222',
      pickupAddress: '123 Main St',
      dropoffAddress: 'General Hospital',
      pickupTime: now,
      notes: 'Wheelchair access required',
      rideType: 'non-emergency',
      status: 'PENDING',
      createdAt: now,
      updatedAt: now
    },
    {
      bookingId: `BK_${uuidv4()}`,
      patientName: 'Test Patient 2',
      phone: '555-333-4444',
      pickupAddress: '456 Oak Ave',
      dropoffAddress: 'City Clinic',
      pickupTime: now,
      notes: '',
      rideType: 'emergency',
      status: 'CONFIRMED',
      createdAt: now,
      updatedAt: now
    }
  ];

  for (const item of items) {
    console.log('Seeding booking:', item.bookingId);
    await ddbDocClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: item
      })
    );
  }

  console.log('✅ Seeding complete.');
}

seed().catch((err) => {
  console.error('Error seeding data:', err);
  process.exit(1);
});
