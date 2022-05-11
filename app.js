const  express =  require("express");

 

const app =  express();
app.listen(8080);


require('./model/index.js');

app.get("/",(request,response)=>{
    // response.status(200);

    // const msg = {
    //     msg:"success"
    // };
    // response.json(msg);


    response.send('home page');
});


 