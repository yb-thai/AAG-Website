// backend/src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const bookingsRoutes = require('./routes/public/bookings.routes');
// admin routes will come later

const app = express();

// Basic security + parsing
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

// Logging
app.use(morgan('dev'));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'aagc-backend' });
});

// Public routes
app.use('/api', bookingsRoutes);

// 404 + error handlers
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
