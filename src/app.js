const express = require('express');
const app = express();

/*middleware ====> */ 
const cors = require('./../middleware/cors_middleware.js');
const bodyparser = require('./../middleware/bodyparser_middleware.js');
const multer = require('./../middleware/multer.js');
app.use(cors);
app.use(bodyparser.urlencoded);
 
/*routes ====>*/  require('./../routes')(app);

/*migration ====>*/  app.get("/migration",require('./../Migration/migration').index);

/*Port ====>*/ const Port = 8080; app.listen(Port);