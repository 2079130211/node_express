let customer = require('./customer_route');
const user = require('./user_route');

module.exports = (app) => {
    app.get("/migration", require('./../database/migration').index);
    app.use('/api/user', user);
    app.use('/api/customer', customer);
}