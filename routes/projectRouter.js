const express = require('express');

const ProjectModel = require('./projectModel.js');

const router = express.Router();

router.post('/addres', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.addingResources(request.body)
    .then(addedID => {
      //console.log(addedID);
      responce.json(addedID);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Post Failed."} )
    })
});

router.get('/resourceList', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.getResources()
    .then(resources => {
      //console.log(resources);
      responce.json(resources);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Get Failed."} )
    })
});


module.exports = router;
