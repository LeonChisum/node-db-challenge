const faker = require('faker')

const fakeTask = () => ({
  description: faker.lorem.sentence(10),
  notes: faker.random.words(11),
  project_id: faker.random.number(25),
  completed: faker.random.boolean()
})

exports.seed = function(knex) {
  const fakeTasks = []
  const num = 20

  for (let i = 0; i < num; i++ ) {
    fakeTasks.push(fakeTask())
  }
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(fakeTasks);
    });
};
