 var show = (request,response)=>{
    response.status(200);
        const msg = {
            msg:"success"
        };
        response.json(msg);
    
};

 


module.exports = {
    // insert,
    // update,
    show,
    // fetchall,
    // delate
}