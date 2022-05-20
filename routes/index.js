
const  express =  require("express");
const app =  express();
require("./user_route.js")(app);
require("./customer_route.js")(app);


 
// const  cors =  require("cors");
// require("./user_route.js")(app); 
// require("./customer_route.js")(app);
// var coreOption = {
//     origin:'http:localhost:8080',
// }

// app.use(cors(coreOption));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


 
app.listen(8080);


 