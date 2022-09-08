const express = require('express');
const app = express();

/*middleware ====> */
const cors = require('./../app/middleware/cors_middleware.js');
const bodyparser = require('./../app/middleware/bodyparser_middleware.js');
const multer = require('./../app/middleware/multer.js');
app.use(cors);
app.use(bodyparser.urlencoded);
/*routes ====>*/
require('./../routes')(app);
/*migration ====>*/

/*Port ====>*/
const Port = 8080;
app.listen(Port);