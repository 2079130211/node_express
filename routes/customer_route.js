    let controller = require("./../controller/customer.js");
    let prefix = "/api/customer";
    const router = require('express').Router();
    router.get(prefix,controller.index);
        router.post(prefix,controller.store);
        router.get(prefix+'/:type',controller.show);
        router.put(prefix+'/:type',controller.update);
        router.delete(prefix+'/:type',controller.delate);
    module.exports = router;
    
     


        
