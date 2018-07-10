const config = require('./config.js');
const { Pool } = require('pg');

const pool = new Pool(config);
pool.connect();

module.exports.getTimeCards = function getTimeCards(callback) {
  const query = `SELECT id, emoji, title, end_date AS date FROM timecards;`;

  pool.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

module.exports.addTimeCard = function addTimeCard(dataToAdd, callback) {
  const emoji = dataToAdd.emoji;
  const title = dataToAdd.title;
  const date = dataToAdd.date;

  const query = `INSERT INTO timecards (emoji, title, end_date)
    VALUES ('${emoji}', '${title}', TIMESTAMP '${date}')`;

  pool.query(query, (err, results) => {
    if (err) {
      console.log('ERROR QUERY:' + query + 'HAS DATE TYPEOF:' + typeof date);
      console.log(err);
      callback(err, null);
    } else {
      callback(null, 'A new TimeCard was added to the database!');
    }
  });
};
