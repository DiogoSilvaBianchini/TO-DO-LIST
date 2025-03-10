require("dotenv").config()

const {DATABASE_USER, DATABASE_PASS, DATABASE_NAME, DATABASE_HOST} = process.env

module.exports = {
  "development": {
    "username": DATABASE_USER,
    "password": DATABASE_PASS,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
    "dialect": "postgres",
    "logging": false
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
}
