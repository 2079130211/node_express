 
const express = require('express');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;

var corOption = {
    origin : 'http://localhost:'+PORT
}


require('./../routes')(app);
app.listen(PORT);