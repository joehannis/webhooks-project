const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

// Basic route to test that the server is working
app.get('/health', (req, res) => {
  res.status(200).send('Working');
});

app.get('/', (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log(`App listening on port 3000!`);
});
module.exports = app;
