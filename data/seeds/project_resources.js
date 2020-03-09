const faker = require('faker')

const fakeProjectResource = () => ({
  projectID: faker.random.number(22),
  resourcesID: faker.random.number(20)
})

exports.seed = function(knex) {
  const fakeProjects = []
  const num = 40

  for (let i = 0; i < num; i++ ) {
    fakeProjects.push(fakeProjectResource())
  }
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert(fakeProjects);
    });
};
