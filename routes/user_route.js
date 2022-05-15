
module.exports = (app)=>{
    var user = require("./../controller/user.js");
    app.get("/insert",user.insert);
    app.get("/update",user.update);
    app.get("/show",user.show);
    app.get("/fetchall",user.fetchall);
    app.get("/delate",user.delate);
}; 