var db = require('./../database/index.js');

const users = db.users;

var insert =    async (request,response)=>{

    // let insert =  await users.create({name:"sager",email:"hello@gmail.com"});
    
    // const msg = {msg:insert};
    response.status(200);
    
    response.json(db); 
};

var update = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"update"
        };
        response.json(msg);
    
};

var show = async (request,response)=>{
 

    // var data = await users.findAll({});
    
    response.status(200);

        const msg = {
            msg:data
        };
        response.json(msg);
    
};

var fetchall = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"fetchall"
        };
        response.json(msg);
    
};

var delate = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"delate"
        };
        response.json(msg);
    
};

module.exports = {
    insert,
    update,
    show,
    fetchall,
    delate
}