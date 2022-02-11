const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get('/', (req, res) => {
  User.find()
      .sort({ date: -1 })
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});


router.post('/register', (req, res) => {
  const {errors, isValid} = validateRegisterInput(req.body);

  if (!isValid){
    return res.status(400).json(errors)
  }


  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        User.findOne({ username: req.body.username })
          .then(user => {
            if (user) {
              return res.status(400).json({username: "A user has already registered with this username"})
            } else {
              const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
              })
      
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                })
              })
            }
          })
      }
    })
})


router.post('/login', (req,res) => {
  const {errors, isValid} = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password


  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({email: 'Does not exist'})
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              username: user.username,
              email: user.email,
              events: user.events,
              // friends: user.friends
            }
            jwt.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 3600},
              (err,token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                })
              }
            )

          } else {
            return res.status(400).json({password: 'wrong password'})
          }
        })
    })
})

router.patch("/:id", async (req, res) => {
  const id = req.body._id;
  try {
    await User.findById(id, (error, userToUpdate) => {
      userToUpdate.events = req.body.events,
      userToUpdate.friends = req.body.friends,
      userToUpdate.save();
      res.send(userToUpdate);
    });
  } catch (error) {}
});

module.exports = router;