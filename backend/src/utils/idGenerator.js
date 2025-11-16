// backend/src/utils/idGenerator.js
const { v4: uuidv4 } = require('uuid');

function generateBookingId() {
  return `BK_${uuidv4()}`;
}

module.exports = {
  generateBookingId
};
