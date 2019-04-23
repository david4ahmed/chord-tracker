const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined')); // for logging
app.use(bodyParser.json()); // for JSON
app.use(cors()); // For clients to hit your server

app.get('/status', (req, res) => {
  res.send({
    msg: "hello world"
  });
});

app.listen(process.env.PORT || 8081);