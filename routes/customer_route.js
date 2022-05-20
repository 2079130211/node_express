
module.exports = (router)=>{
    let controller = require("./../controller/customer.js");
    let prefix = "/customer";
    router.post(prefix,controller.store);
    router.put(prefix,controller.update);
    router.get(prefix+'/:type',controller.show);
    router.get(prefix,controller.index);
    router.delete(prefix,controller.delate);
};