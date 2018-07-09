var express = require('express');
var items = require('../database-mysql');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/timecards', function (req, res) {
  // TO DO - make a database query here
  // TO DO - handle errors

  var data = [
    {emoji: '🎓', title: 'Hack Reactor Graduation', date: new Date('July 8, 2018 13:27:35')},
    {emoji: '🌵', title: 'Move to Austin, Texas', date: new Date('July 10, 2018 15:27:40')},
    {emoji: '💻', title: 'Become an Engineer', date: new Date('November 9, 2018 00:00:00')}
  ]

  res.status(200);
  res.json(data);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

