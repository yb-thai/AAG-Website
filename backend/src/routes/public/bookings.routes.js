// backend/src/routes/public/bookings.routes.js
const express = require('express');
const { createBooking } = require('../../controllers/bookings.controller');
const { validateBody, bookingSchema } = require('../../middleware/validateBody');

const router = express.Router();

// POST /api/bookings
router.post('/bookings', validateBody(bookingSchema), createBooking);

module.exports = router;
