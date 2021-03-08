const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const posts = {};
/**
 * [{ id: '123', title: 'my title' }, {...}]
 * {
 *  "123123": {
 *    "id": "123123",
 *    "title": "My post"
 *  },
 * }
 *
 */

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString('hex');

  posts[id] = { id, title };

  res.status(201).json(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
