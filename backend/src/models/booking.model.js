// backend/src/models/booking.model.js
const { PutCommand, GetCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDocClient } = require('../config/dynamoClient');
const { loadConfig } = require('../config/env');

const config = loadConfig();
const TABLE_NAME = config.bookingsTableName;

/**
 * Save a booking item into DynamoDB.
 */
async function createBookingItem(booking) {
  const params = {
    TableName: TABLE_NAME,
    Item: booking
  };

  await ddbDocClient.send(new PutCommand(params));
  return booking;
}

/**
 * Get booking by id (optional for later).
 */
async function getBookingById(bookingId) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      bookingId
    }
  };

  const result = await ddbDocClient.send(new GetCommand(params));
  return result.Item || null;
}

/**
 * List bookings by status – stub for now.
 */
async function listBookingsByStatus(_status) {
  // Implement with GSI later
  return [];
}

module.exports = {
  createBookingItem,
  getBookingById,
  listBookingsByStatus
};
