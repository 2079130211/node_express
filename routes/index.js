let customer = require('./customer_route'); 
const user = require('./user_route'); 

 module.exports = (app)=>{
    app.use(customer); 
    app.use(user); 
 }

