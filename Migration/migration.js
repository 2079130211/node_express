var index = (request,response)=>{
      const db =   require('./../database');
      db.con.sync().then(() => {
        response.status(200).send('table sync all');
        }).catch((e)=>{
            console.log(e);
        });

}

module.exports = {
    index
}

