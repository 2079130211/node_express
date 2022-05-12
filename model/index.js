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

con.authenticate().then(() => {
    database();
}).catch((error) => {
    console.log(error + ' data base error');
});



const database = () => {
    const db = {};
    db.Sequelize = Sequelize;
    db.con = con;

    
    db.users = require('./users')(con, DataTypes);



    // db.con.sync().then(()=>{
    //     console.log('d');
    // });
}


