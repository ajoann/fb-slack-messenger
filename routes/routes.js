const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.get('/fb', (req, res) {
  console.log('reached fb route!');
  res.send('hello :)');
});
