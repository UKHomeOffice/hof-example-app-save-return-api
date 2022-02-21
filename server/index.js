'use strict';

const config = require('../config');
const express = require('express');
const morgan = require('morgan');
const json = require('morgan-json');
const tableName = config.tableName;

const format = json({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms',
  timestamp: ':date[iso]'
});

const app = express();
const { getForms, getId, create, } = require(`./controllers/${tableName}`);

app.use(express.json());
app.use(morgan(format));
app.use(express.urlencoded({extended: true}));

app.get(`/${tableName}/:email`, getForms);
app.get(`/${tableName}/:email/:id`, getId);
app.post(`/${tableName}`, create);

app.listen(config.port);
