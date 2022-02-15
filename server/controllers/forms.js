const Forms = require('../models/forms');

const create = (req, res, next) => {
  const session = req.body;

  Forms.create(session)
    .then(user => {
      res.json(user);
    })
    .catch(next);
};

module.exports = {
  create
};
