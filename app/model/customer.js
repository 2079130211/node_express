const db = require('./../../database');

// const users = require('./../model/users');


const users = db.users;
const comment = db.comment;

// db.customer.belongsTo(users);
// db.customer.hasMany(comment);

const customer = db.customer;
module.exports = customer;