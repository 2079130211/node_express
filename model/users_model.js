module.exports = (con,DataTypes)=>{
    const Users =  con.define('users',{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'test@gmail.com',
        },
        status:{
            type:DataTypes.TINYINT(1),
            defaultValue:1,

        }
    });

    return Users;
      
};

