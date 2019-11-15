var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'select messages.id, messages.message, messages.roomname, users.username \
                        from messages left outer join users on (messages.userid = users.id) \
                        order by messages.id desc';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
    },

    post: function (callback) {
      let queryStr = 'insert into messages(message, username, roomname) \
                        value(?, (select id from users where username = ? limit 1, ?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'select * from users';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      let queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      });
    }
  }
};

