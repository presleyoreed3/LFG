const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.category = validText(data.category) ? data.category : '';
  data.eventType = validText(data.eventType) ? data.eventType : '';

  if(!Validator.isISO8601(data.eventStart)) {
    errors.eventStart = "Start date is not valid"
  }

  if(!Validator.isISO8601(data.eventEnd)) {
    errors.eventEnd = "End date is not valid"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}