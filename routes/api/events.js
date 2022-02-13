const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

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
        title: req.body.title,
        description: req.body.description,
        eventStart: req.body.eventStart,
        eventEnd: req.body.eventEnd,
        location: req.body.location,
        limit: req.body.limit,
        eventType: req.body.eventType,
        category: req.body.category,
        attendees: req.body.attendees,
        website: req.body.website
      });
  
      newEvent.save().then(event => res.json(event));
    }
  );

router.patch('/:id', async (req, res) => {
  const { errors, isValid } = validateEventInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.body._id;
  const index = req.body.index
  try {
    await Event.findById(id, (error, eventToUpdate) => {
      eventToUpdate.title= req.body.title,
      eventToUpdate.description= req.body.description,
      eventToUpdate.eventStart= req.body.eventStart,
      eventToUpdate.eventEnd= req.body.eventEnd,
      eventToUpdate.location= req.body.location,
      eventToUpdate.limit= req.body.limit,
      eventToUpdate.eventType= req.body.eventType,
      eventToUpdate.category= req.body.category,
      eventToUpdate.website= req.body.website,
      eventToUpdate.attendees = req.body.attendees,
      eventToUpdate.index= index,
      eventToUpdate.save();
      res.send(eventToUpdate)
    })
  } catch (error) {
  }

})

router.delete('/:id', (req, res) => {
  Event.deleteOne({_id: req.params.id})
    .then(() => res.json({deleted: "Event has been deleted"}))
    .catch( error => res.status(404).json({noEventFound: "No Event was found with that ID"}))
})


module.exports = router;