const db = require("../models");

module.exports = {
  findAll: function(req, res){
    db.Restaurants
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Restaurants
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  findByUserId: function(req, res){
    db.Resaurants
      .find(req.params.userid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
