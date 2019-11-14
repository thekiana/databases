CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  `id` INT AUTO_INCREMENT,
  `username` VARCHAR(10) NOT NULL,
  `message` VARCHAR(140) NOT NULL,
  `roomname` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
