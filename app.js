// // modeal import here
// require('./database/index.js');
// // controller
// require('./routes/index.js');



const {
    Sequelize,
    DataTypes
} = require('sequelize');

const con = new Sequelize('tmvtspuc_update', 'root', '12', {
    host: 'localhost',
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
    db.users = require('./model/users_model')(con, DataTypes);
    // db.con.sync().then(()=>{
    //     console.log('d');
    // });

    
const  express =  require("express");
const app =  express();
 

var user = require("./controller/user.js");
app.get("/insert",user.insert);

app.listen(8080);







 