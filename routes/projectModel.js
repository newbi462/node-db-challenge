const db = require('../data/db.js');

module.exports = {
  addingResources,
  getResources,
  addProject,
  getProjects,
  addTasks,
  listOFTasks,
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

function getProjects() {
  return db("project");
}

function addTasks(reqObject) {
  return db("task").insert(reqObject)
    .then(idOfAdded => {
         return db("taskLinkProject").insert({taskID:idOfAdded[0],projectID:idOfAdded[0]});
     });
}

function listOFTasks() {
  return db("taskLinkProject")
  .join("task", "taskLinkProject.taskID", "task.id" )
  .join("project", "taskLinkProject.projectID", "project.id" )
  .select(
    "task.task",
    "task.taskDescription",
    "project.name",
    "project.projectDescription"
  );
}

/*



retrieving a list of tasks.
The list of tasks should include
  the project name
  and project description.
  AND THE TASK


adding tasks.

when adding a task the client
  must provide a description,
  the notes are optional.
  MINE ALSO NEEDS A TASK


  task
  ID	task	taskDescription







adding projects.

when adding projects the client must provide
  a name,
  the description is optional

  also need the IDs



*/
