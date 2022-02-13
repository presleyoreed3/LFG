const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  eventStart: {
    type: Date,
    required: true
  },
  eventEnd: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  limit: {
    type: Number,
    required: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  eventType: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  attendees: {
    type: [Schema.Types.ObjectId],
    ref: 'users',
    required: true,
    default: []
  },
  index: {
    type: Number,
    required: false
  }
}, {
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('events', EventSchema);
