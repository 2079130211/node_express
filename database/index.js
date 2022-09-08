const database = require('./../config');

const dbname = database.dbname;
const dbuser = database.dbuser;
const dbhost = database.dbhost;
const dbpassword = database.dbpassword;

const {
    Sequelize,
    DataTypes
} = require('sequelize');


const con = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'mysql',
    logging: false,
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
db.users = require('./../app/schema/user_schema')(con, DataTypes);
db.customer = require('./../app/schema/customer_schema')(con, DataTypes);
// db.comment = require('./../app/schema/comment_schema')(con, DataTypes);
module.exports = db;