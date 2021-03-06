const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Comment cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}