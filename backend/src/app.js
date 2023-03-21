require('dotenv').config();
const express = require('express');
var cors = require('cors');
const { validateCredentials } = require('./loginHandler');
const app = express();
var bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.post('/login', async (req, res) => {
  const loginDetails = await validateCredentials(req.body);
  res.status(loginDetails.statusCode);
  res.send(loginDetails);
});

module.exports = app;
