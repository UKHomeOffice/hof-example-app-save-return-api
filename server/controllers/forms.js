'use strict';

const Forms = require('../models/forms');

const decodeEmail = email => email.includes('@') ? email : Buffer.from(email, 'hex').toString();

const getForms = (req, res, next) => {
  const email = decodeEmail(req.params.email);
  Forms.findByEmail(email)
    .then(user => res.json(user))
    .catch(next);
};

const getId = (req, res, next) => {
  const id = req.params.id;
  const email = decodeEmail(req.params.email);
  Forms.findById(id, email)
    .then(session => res.json(session))
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

const del = (req, res, next) => {
  const id = req.params.id;
  const email = decodeEmail(req.params.email);

  Forms.del(id, email)
    .then(res.sendStatus(200))
    .catch(next);
};

module.exports = {
  getForms,
  getId,
  create,
  del
};
