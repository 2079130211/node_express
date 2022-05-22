const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/migration",require('./../Migration/migration').index);

const PORT = 8080;
const corOption = { origin : 'http://localhost:'+PORT }
require('./../routes')(app);
app.listen(PORT);