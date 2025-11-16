// backend/src/middleware/validateBody.js
const Joi = require('joi');

function validateBody(schema) {
  return (req, res, next) => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details.map((d) => d.message)
      });
    }

    req.body = value;
    next();
  };
}

// Example booking schema (used in routes)
const bookingSchema = Joi.object({
  patientName: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(6).max(30).required(),
  pickupAddress: Joi.string().min(3).max(255).required(),
  dropoffAddress: Joi.string().min(3).max(255).required(),
  pickupTime: Joi.string().min(3).max(100).required(), // could be ISO string later
  notes: Joi.string().max(500).allow('', null),
  rideType: Joi.string().valid('emergency', 'non-emergency', 'wheelchair').default('non-emergency')
});

module.exports = {
  validateBody,
  bookingSchema
};
