const db = require('./../database');
const users = db.customer;


var index = async (request,response)=>{
    var data = await users.findAll({}); 
        response.status(200).json({msg:data}); 

};

var show = async (request,response)=>{
    let id = request.params.type;
    if(false){
        var data = await users.findOne(
            { where: { id: id } }
    );
    }else{
        var data = await users.findAll(
            { where: { id: id } }
        );   
    }
    response.status(200).json({msg:data}); 
};

var store =    async (request,response)=>{
    let insert =  await users.create(request.body);
    response.status(200).json({msg:insert}); 
};

var update = async (request,response)=>{
    
    let up =  await users.update(
        {  name:"ajayf", },
        { where: { id: 1 } }
      );

response.status(200).json({msg:up}); 

};

var delate = async (request,response)=>{
    
    let del =  await users.destroy({
        where: { id: 1 }
    }
      );

response.status(200).json({msg:del}); 

};


module.exports = {
    index,
    store,
    update,
    show,
    delate
}