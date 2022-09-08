 
//middleware
const body =  require("body-parser");
const urlencoded =  body.urlencoded({extended:true});
const jsonEncoder =  body.json();
module.exports = {
    urlencoded
}
