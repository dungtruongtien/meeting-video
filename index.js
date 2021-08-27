require('dotenv').config();
const path = require('path');

const express = require('express');
const HTTP = require('http');
// const FS = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

HTTP.createServer(app).listen(process.env.PORT, () => {
  console.log(`Listening at :${process.env.PORT}...`);
});
