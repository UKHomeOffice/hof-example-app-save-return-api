'use strict';

const Forms = require('../models/forms');

const decodeEmail = email => email.includes('@') ? email : Buffer.from(email, 'hex').toString();

const getForms = (req, res, next) => {
  const email = decodeEmail(req.params.email);

  Forms.findByEmail(email)
    .then(user => res.json(user))
    .catch(next);
};

const create = (req, res, next) => {
  const session = req.body;

  Forms.create(session)
    .then(user => {
      res.json(user);
    })
    .catch(next);
};

module.exports = {
  getForms,
  create
};
