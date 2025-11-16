// backend/src/controllers/bookings.controller.js
const bookingsService = require('../services/bookings.service');
const { success } = require('../utils/response');

async function createBooking(req, res, next) {
  try {
    const booking = await bookingsService.createBooking(req.body);
    return success(res, booking, 201);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createBooking
};
