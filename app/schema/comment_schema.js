module.exports = (con, DataTypes) => {
    const customer = con.define('comment', {
        comments: DataTypes.STRING,
        status: {
            type: DataTypes.TINYINT(1),
            defaultValue: 1,

        },
        customerId: {
            type: DataTypes.INTEGER(1),
        }
    });

    return customer;
};