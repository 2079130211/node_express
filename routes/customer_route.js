
module.exports = (app)=>{
    var customer = require("./../controller/customer.js");
    app.get("/customer/insert",customer.insert);
    app.get("/customer/update",customer.update);
    app.get("/customer/show",customer.show);
    app.get("/customer/fetchall",customer.fetchall);
    app.get("/customer/delate",customer.delate);
};