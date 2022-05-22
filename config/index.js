require('dotenv').config();
const database = {
 dbname:process.env.DB_NAME,
 dbuser:process.env.DB_USER,
 dbpassword:process.env.DB_PASSWORD,
 dbhost:process.env.DB_HOST,
}
module.exports = database;