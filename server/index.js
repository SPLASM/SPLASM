const express = require('express');
const app = express();
const router = require('./router.js');
const db = require('../db/mongo/index.js');

const portNum = 3000;

app.use(express.static(__dirname + '/../client'));
app.use('/', router);

app.get('/', (req, res) => res.send());

app.listen(portNum, () => console.log(`App listening on port ${portNum}`));
