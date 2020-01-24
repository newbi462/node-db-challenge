const db = require('../data/db.js');

module.exports = {
  addingResources,
}

function addingResources(reqObject) {
  return db("resource").insert(reqObject);
    /*.then(idOfAdded => {
      console.log(idOfAdded);
      db("resource").where({id:idOfAdded[0]})
    });*/
}

/*
adding resources.

when adding resources the client must provide a name, the description is optional.


*/
