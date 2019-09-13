
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "meat" },
        { name: "cheese" },
        { name: "taco shell" },
        { name: "bread" },
        { name: "lettuce" },
      ]);
    });
};
