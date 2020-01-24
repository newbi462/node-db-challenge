const db = require('../data/db.js');

module.exports = {
  addingResources,
  getResources,
}

function addingResources(reqObject) {
  return db("resource").insert(reqObject);
    /*.then(idOfAdded => {
      console.log(idOfAdded);
      db("resource").where({id:idOfAdded[0]})
    });*/
}

function getResources() {
  return db("resource");
}

/*
retrieving a list of resources.

*/
