const db = require('./../database');
 

const users = db.users;

var insert =    async (request,response)=>{
    
    let create =  await users.create({
            name:"sager",
            email:"hello@gmail.com"
        });


   
    let msg = {msg:create};
    response.status(200);
    response.json(msg); 
};

var update = async (request,response)=>{


    let up =  await users.update(
        {  name:"ajayf", },
        { where: { id: 1 } }
      );
      
    

let msg = {msg:up};
response.status(200);
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