module.exports = (con, DataTypes) => {
    const customer = con.define('customer', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com',
        },
        status: {
            type: DataTypes.TINYINT(1),
            defaultValue: 1,
        },
        userId: {
            type: DataTypes.TINYINT(1),
        }
    });

    return customer;
};