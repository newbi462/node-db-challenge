const db = require('../data/db.js');

module.exports = {
  addingResources,
  getResources,
  addProject,
}

function addingResources(reqObject) {
  return db("resource").insert(reqObject);
    /*.then(idOfAdded => {
      console.log(idOfAdded);
      db("resource").where({id:idOfAdded[0]})
    });*/
}

function getResources(reqObject) {
  return db("resource");
}

function addProject(reqObject) {
  return db("project").insert(reqObject)
    .then(idOfAdded => {
         return db("resLinkProject").insert({resourceID:idOfAdded[0],projectID:idOfAdded[0]});
     });
}

/*

adding projects.

when adding projects the client must provide
  a name,
  the description is optional

  also need the IDs



*/
