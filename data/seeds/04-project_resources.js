
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {projectID: 65, resourcesID: 65},
        {projectID: 68, resourcesID: 66},
        {projectID: 73, resourcesID: 65},
        {projectID: 63, resourcesID: 66},
        {projectID: 73, resourcesID: 66},
        {projectID: 68, resourcesID: 65},
      ]);
    });
};
