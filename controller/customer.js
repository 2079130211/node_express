

var insert = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"insert"
        };
        response.json(msg);
    
};



var update = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"update"
        };
        response.json(msg);
    
};


var show = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"success"
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