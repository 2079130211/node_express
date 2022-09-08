    let controller = require("./../app/controller/customer_ct.js");

    const router = require('express').Router();


    router.get('/', (request, response) => {
        controller.index(request, response);
    });


    router.post('/', (request, response) => {
        controller.store(request, response);
    });


    router.get('/:type', (request, response) => {
        controller.show(request, response);
    });


    router.put('/:type', (request, response) => {
        controller.update(request, response);
    });


    router.delete('/:type', (request, response) => {
        controller.delate(request, response);
    });


    module.exports = router;