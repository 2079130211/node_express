//cors
const cors = require('cors'); 
const Port = 8080
const corOption = { origin : 'http://localhost:'+Port }
module.exports = cors();