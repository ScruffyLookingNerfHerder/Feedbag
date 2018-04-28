const express = require('express');
const axios = require('axios');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../middleware/mustBeLoggedIn');
const mongoose = require('mongoose');
const Twitter = require('twitter');

async function getCurrentUser(req, res){
  const { id, username } = req.user;
  const memberships = await db.SocialMediaMembership
    .find({userId: new mongoose.Types.ObjectId(id) });
  res.json({
    id, username,
    memberships: memberships.map(m => m.provider)

  });

}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not currently logged in.'
      })
    }

    getCurrentUser(req, res);
  })
  // POST to /api/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    }

    getCurrentUser(req, res);
  })
    .delete((req, res) => {
      req.logout();
      req.session.destroy();
      res.json({
        message: 'You have been logged out'
      });
    });

    router.route('/users')
      .post((req, res, next) => {
        db.User.create(req.body)
          .then(user => {
            const { userid, username } = user;
            res.json({
              userid, username
            });
          })
          .catch(err => {
            if (err.code === 11000){
              res.status(400).json({
                message: 'Username already in use'
              })
            }
            next(err);
          });
      });

      router.route('/stuff')
        .get(mustBeLoggedIn(), (req, res) => {
          res.json([
            "STAR WARS NOTHING BUT STAR WARS",
            "Homer Simpson",
            "Doomguy"
          ]);
        });

module.exports = router;
