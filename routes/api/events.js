const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const jwt = require('jsonwebtoken');


const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');
const { route } = require('./users');

router.get('/', (req, res) => {
  Event.find()
      .sort({ date: -1 })
      .then(events => res.json(events))
      .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

router.get('/user/:user_id', (req, res) => {
  Event.find({user: req.params.user_id})
      .then(events => res.json(events))
      .catch(err =>
          res.status(404).json({ noeventsfound: 'No events found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
      .then(event => res.json(event))
      .catch(err =>
          res.status(404).json({ noeventfound: 'No event found with that ID' })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        owner: req.user.id,
        name: req.body.name,
        eventStart: req.body.eventStart,
        eventEnd: req.body.eventEnd,
        location: req.body.location,
        limit: req.body.limit,
        eventType: req.body.eventType,
        category: req.body.category,
        attendees: req.body.attendees
      });
  
      newEvent.save().then(event => res.json(event));
    }
  );

router.patch('/:id', (req, res) => {
  Event.updateOne({_id: req.params.id})
    .then(() => res.json({updated: "Event has been successfully updated"}, req.body))
    .catch( error => res.status(404).json({noEventFound: "No Event was found with that ID"}))
})

router.delete('/:id', (req, res) => {
  Event.deleteOne({_id: req.params.id})
    .then(() => res.json({deleted: "Event has been deleted"}))
    .catch( error => res.status(404).json({noEventFound: "No Event was found with that ID"}))
})


module.exports = router;