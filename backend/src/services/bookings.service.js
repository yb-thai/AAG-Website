// backend/src/services/bookings.service.js
const { createBookingItem } = require('../models/booking.model');
const { generateBookingId } = require('../utils/idGenerator');

async function createBooking(input) {
  const now = new Date().toISOString();

  const booking = {
    bookingId: generateBookingId(),
    patientName: input.patientName,
    phone: input.phone,
    pickupAddress: input.pickupAddress,
    dropoffAddress: input.dropoffAddress,
    pickupTime: input.pickupTime,
    notes: input.notes || null,
    rideType: input.rideType || 'non-emergency',
    status: 'PENDING',
    createdAt: now,
    updatedAt: now
  };

  const saved = await createBookingItem(booking);
  return saved;
}

module.exports = {
  createBooking
};
