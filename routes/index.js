
const  express =  require("express");
const app =  express();
var user = require("./../controller/user.js");
app.get("/",user.show);
app.listen(8080);




 