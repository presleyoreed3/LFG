const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const jwt = require('jsonwebtoken');


const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');
const { route } = require('./comments');

router.get('/', (req, res) => {
  Comment.find()
      .sort({ date: -1 })
      .then(comments => res.json(comments))
      .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

router.get('/event/:event_id', (req, res) => {
  Comment.find({event: req.params.event_id})
      .then(comments => res.json(comments))
      .catch(err =>
          res.status(404).json({ nocommentsfound: 'No comments found for that Event' }
      )
  );
});

router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
      .then(comment => res.json(comment))
      .catch(err =>
          res.status(404).json({ nocommentfound: 'No comment found with that ID' })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCommentInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newComment = new Comment({
        ownerId: req.user.id,
        text: req.body.text,
        eventId: req.body.eventId,
      });
  
      newComment.save().then(comment => res.json(comment));
    }
  );

// router.patch('/:id', (req, res) => {
//   Comment.updateOne({_id: req.params.id})
//     .then(() => res.json({updated: "Comment has been successfully updated"}, req.body))
//     .catch( error => res.status(404).json({noCommentFound: "No Comment was found with that ID"}))
// })


router.patch('/:id', async (req, res) => {
  const id = req.body._id;
  const index = req.body.index
  try {
    await Comment.findById(id, (error, commentToUpdate) => {
      commentToUpdate.text= req.body.text,
      commentToUpdate.index = index,
      commentToUpdate.save();
      res.send(commentToUpdate)
    })
  } catch (error) {
    console.log(error);
  }

})

router.delete('/:id', (req, res) => {
  Comment.deleteOne({_id: req.params.id})
    .then(() => res.json({deleted: "Comment has been deleted"}))
    .catch( error => res.status(404).json({noEventFound: "No Comment was found with that ID"}))
})

module.exports = router;