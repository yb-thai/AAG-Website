// backend/src/middleware/errorHandler.js
const logger = require('../utils/logger');

function notFoundHandler(req, res, _next) {
  return res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`
  });
}

function errorHandler(err, _req, res, _next) {
  logger.error('Unhandled error', { error: err });

  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500 ? 'Internal server error' : err.message || 'Error';

  return res.status(statusCode).json({
    success: false,
    message
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
};
