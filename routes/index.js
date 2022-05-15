
const  express =  require("express");
const app =  express();
require("./user_route.js")(app);
require("./customer_route.js")(app);
app.listen(8080);




 