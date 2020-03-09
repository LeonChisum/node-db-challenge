const faker = require('faker')

const fakeResource = () => ({
  name: faker.random.word(),
  description: faker.lorem.sentence(1)
})

exports.seed = function(knex) {
  const fakeResources = []
  const num = 20

  for (let i = 0; i < num; i++ ) {
    fakeResources.push(fakeResource())
  }
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(fakeResources);
    });
};
