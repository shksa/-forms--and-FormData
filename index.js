const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const multer = require('multer');

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.post('/api', multer().none(), (req, res) => {
  console.log(`Got content-type ${req.headers['content-type']}`);
  console.log('body', req.body);
  res.json(req.body);
});

// app.post('/api', (req, res) => {
//   console.log(`Got content-type ${req.headers['content-type']}`);
//   console.log('body', req.body);
//   res.json(req.body);
// });

app.get('/api', (req, res) => {
  console.log(`Got content-type ${req.headers['content-type']}`);
  console.log('query', req.queru);
  res.json(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
