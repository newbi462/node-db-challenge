
exports.up = function(knex) {
  return knex.schema
    .createTable("project", table => {
        table.increments();
        table.string("name").notNullable().index();
        table.string("projectDescription").index();
        table.boolean("completed").defaultTo(false);
    })
    .createTable("task", table => {
        table.increments();
        table.string("task").notNullable().index();
        table.string("taskDescription").notNullable().index();
        table.string("notes").index();
        table.boolean("completed").defaultTo(false);
    })
    .createTable("resource", table => {
        table.increments();
        table.string("resource").notNullable().index();
        table.string("resourceDscription").index();
    })
    .createTable("resLinkProject", table => {
        table.increments();
        table.integer("resourceID")
          .unsigned()
          .notNullable()
          .references("id").inTable("resource")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        table.integer("projectID")
          .unsigned()
          .notNullable()
          .references("id").inTable("project")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
    })
    .createTable("taskLinkProject", table => {
        table.increments();
        table.integer("taskID")
          .unsigned()
          .notNullable()
          .references("id").inTable("task")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        table.integer("projectID")
          .unsigned()
          .notNullable()
          .references("id").inTable("project")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("taskLinkProject")
    .dropTableIfExists("resLinkProject")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};


/*

taskLinkProject
ID	taskID	projectID

*/
