const express = require('express');
const app = express();
const path = require('path');
const port = '3000';

// express.static(path.join(__dirname, 'public'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen('3000', () => {
  console.log(`Listening on PORT http://localhost:${port}`);
})

