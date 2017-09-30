const express = require('express');
const app = express();
const router = require('./router.js');
const db = require('../db/mongo/index.js');

app.use(express.static('../client'));

app.use('/', router);

app.get('/', function (req, res) {
  res.send();
});

app.listen(3000, function () {
  console.log('app listening on port 3000.');
});