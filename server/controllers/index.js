var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log('log from controller----------', data);
          res.send(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

