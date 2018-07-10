var express = require('express');
var db = require('../database-postgres');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/timecards', (req, res) => {
  db.getTimeCards( (err, data) => {
    if (err) {
      res.status(400);
      res.end();
    } else {
      res.status(200);
      res.json(data);
    }
  });
});

app.post('/timecards', (req, res) => {
  db.addTimeCard( (req.body), (err, data) => {
    if (err) {
      res.status(400);
      res.end();
    } else {
      console.log(data);
      res.status(201);
      res.end(data);
    }
  });
});

app.delete('/timecards', (req, res) => {
  db.deleteTimeCards( (err, data) => {
    if (err) {
      res.status(400);
      res.end();
    } else {
      res.status(200);
      res.end(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

