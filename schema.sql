/*  Execute this file from the command line interface:
 *  \i /Path/To//schema.sql
 *  to create the database and the tables.
 */

DROP DATABASE IF EXISTS minusdb;

CREATE DATABASE minusdb;

\c minusdb;

CREATE TABLE timecards (
  id SERIAL,
  emoji TEXT NOT NULL,
  title TEXT NOT NULL,
  end_date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO timecards (emoji, title, end_date) VALUES ('🌉', 'Visit San Francisco', TIMESTAMP '2018-07-09 15:36:38');
-- INSERT INTO timecards (emoji, title, end_date) VALUES ('🌵', 'Move to Austin, Texas', TIMESTAMP '2018-07-11 19:39:38');
-- INSERT INTO timecards (emoji, title, end_date) VALUES ('🐶', 'Adopt a friend!', TIMESTAMP '2018-11-10 05:36:38');