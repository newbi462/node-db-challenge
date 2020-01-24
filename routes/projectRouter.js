const express = require('express');

const ProjectModel = require('./projectModel.js');

const router = express.Router();

router.post('/addres', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.addingResources(request.body)
    .then(addedID => {
      console.log(addedID);
      responce.json(addedID);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Post Failed."} )
    })
});


module.exports = router;
