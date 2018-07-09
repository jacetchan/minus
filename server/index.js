var express = require('express');
// var items = require('../database-mysql');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

var data = [
  {emoji: '🎓', title: 'Graduation Ceremony', date: new Date('July 8, 2018 13:27:35')},
  {emoji: '🌵', title: 'Move to Austin, Texas', date: new Date('July 10, 2018 15:27:40')},
  {emoji: '💻', title: 'Become an Engineer', date: new Date('November 9, 2018 00:00:00')}
]

app.get('/timecards', (req, res) => {
  // TO DO - make a database query here
  // TO DO - handle errors

  res.status(200);
  res.json(data);
});

app.post('/timecards', (req, res) => {
  console.log(req.body);

  // TO DO - make a database query here
  data.push(req.body);
  res.status(200);
  res.end();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

