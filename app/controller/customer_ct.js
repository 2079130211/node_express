 const customer = require('./../model/customer');
 const users = require('./../model/users');
 const comment = require('./../model/comment');







 var index = async(request, response) => {
     var data = await customer.findAll({});
     response.status(200).json({ msg: data });

 };

 var show = async(request, response) => {
     let id = request.params.type;
     if (false) {
         var data = await customer.findOne({ where: { id: id } });
     } else {
         var data = await customer.findAll({
             include: comment,
             where: { id: id }
         });
     }
     response.status(200).json({ msg: data });
 };

 var store = async(request, response) => {
     let insert = await customer.create(request.body);
     response.status(200).json({ msg: insert });
 };

 var update = async(request, response) => {

     let up = await customer.update({ name: "ajayf", }, { where: { id: 1 } });

     response.status(200).json({ msg: up });

 };

 var delate = async(request, response) => {

     let del = await customer.destroy({
         where: { id: 1 }
     });

     response.status(200).json({ msg: del });

 };


 module.exports = {
     index,
     store,
     update,
     show,
     delate
 }