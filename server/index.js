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
const { create } = require(`./controllers/${tableName}`);

app.use(express.urlencoded({extended: true}));
app.use(morgan(format));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post(`/${tableName}`, create);

app.listen(config.port);
