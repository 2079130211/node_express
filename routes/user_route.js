
module.exports = (app)=>{
let controller = require("./../controller/user.js");
    let prefix = "/user";
 
    var app = app();
    var router = app.Router();

    // app.get(prefix,controller.index);
    // app.post(prefix,controller.store);
    // app.get(prefix+'/:type',controller.show);
    // app.put(prefix+'/:type',controller.update);
    // app.delete(prefix+'/:type',controller.delate);


     router.get(prefix,controller.index);
    router.post(prefix,controller.store);
    router.get(prefix+'/:type',controller.show);
    router.put(prefix+'/:type',controller.update);
    router.delete(prefix+'/:type',controller.delate);


    app.use('/api/user',router);


}

