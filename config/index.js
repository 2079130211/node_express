const {
    Sequelize,
    DataTypes
} = require('sequelize');

require('dotenv').config();
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;

const con = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

con.authenticate().catch((error) => {
    console.log(error + ' data base error');
});
const db = {};
db.Sequelize = Sequelize;
db.con = con;
//modeal import here
db.users = require('../model/users_model')(con, DataTypes);

// db.con.sync().then(() => {
//     console.log('d');
// });
module.exports = db;