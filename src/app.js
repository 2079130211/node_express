const express = require('express');
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Port
const Port = process.env.Port || 8080;


//cors
const cors = require('cors'); 
const corOption = { origin : 'http://localhost:'+Port }


//routes
require('./../routes')(app);

//migration
app.get("/migration",require('./../Migration/migration').index);

//Port
app.listen(Port);