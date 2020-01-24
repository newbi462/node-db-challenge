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

router.post('/addproject', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.addProject(request.body)
    .then(addedlinkID => {
      //console.log(addedID);
      responce.json(addedlinkID);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Post Failed."} )
    })
});

router.get('/projects', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.getProjects()
    .then(projects => {
      //console.log(resources);
      responce.json(projects);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Get Failed."} )
    })
});

router.post('/addtask', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.addTasks(request.body)
    .then(addedlinkID => {
      //console.log(addedID);
      responce.json(addedlinkID);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Post Failed."} )
    })
});

router.get('/taskList', (request, responce) => {
  //db("cars").insert(request.body)
  ProjectModel.listOFTasks()
    .then(mvptasklist => {
      //console.log(resources);
      responce.json(mvptasklist);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Get Failed."} )
    })
});

module.exports = router;
