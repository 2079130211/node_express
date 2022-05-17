
module.exports = (app)=>{
    let controller = require("./../controller/user.js");
    let prefix = "/user";
    app.post(prefix,controller.store);
    app.put(prefix,controller.update);
    app.get(prefix+'/:type',controller.show);
    app.get(prefix,controller.index);
    app.delete(prefix,controller.delate);
}; 