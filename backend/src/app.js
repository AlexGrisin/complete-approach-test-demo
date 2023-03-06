const express = require('express');
var cors = require('cors');
const { validateCredentials } = require('./loginHandler');
const app = express();
var bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.post('/login', (req, res) => {
  const status = validateCredentials(req.body);
  res.status(status.statusCode);
  res.send(status);
});

module.exports = app;
