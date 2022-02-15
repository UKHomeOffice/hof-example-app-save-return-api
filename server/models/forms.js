'use strict';

const config = require('../../config');
const knexfile = require(`${config.migrationsRepo}`);
const knexfileConfig = knexfile[process.env.NODE_ENV ? 'production' : 'development'];
const tableName = config.tableName;
const knex = require('knex')(knexfileConfig);

const timeout = 1000;
const selectableProps = [
  'id',
  'session',
  'created_at',
  'updated_at'
];

const findByEmail = email => knex.select(selectableProps)
  .from(tableName)
  .where({ email })
  .timeout(timeout);


const create = props => {
  return knex.insert(props)
    .returning(selectableProps)
    .into(tableName)
    .timeout(timeout);
};

module.exports = {
  findByEmail,
  create
};
