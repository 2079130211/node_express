module.exports = (con,DataTypes)=>{
    const users = con.define('users',{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'test@gmail.com'
        }
    }
    );
};