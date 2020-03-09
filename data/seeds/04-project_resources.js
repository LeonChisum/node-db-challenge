
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {projectID: 85, resourcesID: 85},
        {projectID: 88, resourcesID: 88},
        {projectID: 93, resourcesID: 85},
        {projectID: 83, resourcesID: 88},
        {projectID: 93, resourcesID: 88},
        {projectID: 88, resourcesID: 85},
      ]);
    });
};
