const express = require('express');
const { validateCredentials } = require('./loginHandler');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  const statusCode = validateCredentials(req.body);
  res.status(statusCode);
  res.send();
});

module.exports = app;
