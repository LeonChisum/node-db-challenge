exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("projects", projects => {
      projects.increments("id");
      projects
        .text("name")
        .unique()
        .notNullable();
      projects.text("description");
      projects
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    }),
    knex.schema.createTable("tasks", tasks => {
      tasks.increments("id");
      tasks.text("description").notNullable();
      tasks.text("notes");
      tasks
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
      tasks.integer("project_id").unsigned();
      tasks
        .foreign("project_id")
        .references("id")
        .inTable("projects");
      tasks;
    }),
    knex.schema.createTable("resources", resources => {
      resources.increments("id");
      resources
        .text("name")
        .unique()
        .notNullable();
      resources.text("description");
    }),
    knex.schema.createTable("project_resources", project_resources => {
        project_resources
          .integer("projectID")
          .notNullable()
          .references("projects.id");
        project_resources.integer("resourcesID").notNullable().references('resources.id')
        project_resources.primary(["projectID", "resourcesID"])
      }),
  ]);
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources");
    await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};
