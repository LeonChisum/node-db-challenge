const faker = require('faker')

const fakeProject = () => ({
  name: faker.name.title(),
  description: faker.lorem.sentence(10)
})

exports.seed = function(knex) {
  const fakeProjects = []
  const num = 20

  for (let i = 0; i < num; i++ ) {
    fakeProjects.push(fakeProject())
  }
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(fakeProjects);
    });
};
