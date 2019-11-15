var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log('log from controller get----------', console.log(res.json(data));
          res.json(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log('log from controller post----------', data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log('userstuff' + data);
          res.json(data);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.user.post(params, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          console.log('data' + data);
        }
      });
    }
  }
};

