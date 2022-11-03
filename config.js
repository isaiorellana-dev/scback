// config.js
const dotenv = require('dotenv').config();

module.exports = {
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  API_URL: process.env.API_URL,
  FROM_MAIL: process.env.FROM_MAIL,
  TO_MAIL: process.env.TO_MAIL
}