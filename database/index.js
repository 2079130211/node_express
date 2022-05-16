const {
    Sequelize,
    DataTypes
} = require('sequelize');

const con = new Sequelize('test', 'root', '12', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {max: 5,min: 0,idle: 10000}
});

con.authenticate().catch((error) => {console.log(error + ' data base error');});
 
    const db = {};
    db.Sequelize = Sequelize;
    db.con = con;

    //modeal import here
    db.users = require('../model/users_model')(con, DataTypes);

 
    // db.con.sync().then(()=>{
    //     console.log('d');
    // });
 

    module.exports = db;