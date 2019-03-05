require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
}
