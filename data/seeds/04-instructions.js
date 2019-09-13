
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, steps_number: 1, instructions: "cook taco", },
        { recipe_id: 1, steps_number: 2, instructions: "prep taco", },
        { recipe_id: 1, steps_number: 3, instructions: "eat taco", },
        { recipe_id: 2, steps_number: 1, instructions: "cut cheese", },
        { recipe_id: 2, steps_number: 2, instructions: "place cheese", },
        { recipe_id: 2, steps_number: 3, instructions: "eat cheese", },
      ]);
    });
};
