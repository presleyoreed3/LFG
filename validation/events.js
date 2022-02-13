const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.category = validText(data.category) ? data.category : '';
  data.eventType = validText(data.eventType) ? data.eventType : '';
  
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title cannot be blank"
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description cannot be blank"
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category cannot be blank"
  }

  if (Validator.isEmpty(data.eventType)) {
    errors.eventType = "Event Type cannot be blank"
  }
  
  if (data.limit < 2) {
    errors.limit = "Limit must be greater than 1"
  }

  if(!Validator.isISO8601(data.eventStart)) {
    errors.eventStart = "Start date is not valid"
  }

  if(!Validator.isISO8601(data.eventEnd)) {
    errors.eventEnd = "End date is not valid"
  }
  console.log("VALIDATION", errors)
  console.log("DATA", data)
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}