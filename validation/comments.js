const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  data.eventId = validText(data.eventId) ? data.eventId : '';

  if (Validator.isEmpty(data.ownerId)) {
    errors.ownerId = 'Owner field is required';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}