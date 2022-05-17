
module.exports = (app)=>{
    let controller = require("./../controller/customer.js");
    let prefix = "/customer";
    app.post(prefix,controller.store);
    app.put(prefix,controller.update);
    app.get(prefix+'/:type',controller.show);
    app.get(prefix,controller.index);
    app.delete(prefix,controller.delate);
};