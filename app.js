const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logs = require('./routes/logs');
const port = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',logs);

app.listen(port);

module.exports = app;
