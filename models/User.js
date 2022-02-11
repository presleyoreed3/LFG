const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    events: {
      type: [Schema.Types.Mixed],
      required: true,
      default: [],
    },
    friends: {
      type: [Schema.Types.Mixed],
      required: true,
      default: [],
    }
  },
  {
    date: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = User = mongoose.model('users', UserSchema);