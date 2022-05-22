 
let controller = require("./../controller/user.js");
let prefix = "/api/user";


const router = require('express').Router();
router.get(prefix,controller.index);
    router.post(prefix,controller.store);
    router.get(prefix+'/:type',controller.show);
    router.put(prefix+'/:type',controller.update);
    router.delete(prefix+'/:type',controller.delate);
module.exports = router;
