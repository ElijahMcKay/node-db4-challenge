
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments(); 
      tbl.string('name')
        .notNullable(); 
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name')
        .notNullable();   
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      tbl.integer('quantity')
        .unsigned()
        .notNullable()
  })
  .createTable('instructions', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes'); 
      tbl.integer('steps_number')
        .unsigned()
        .notNullable(); 
      tbl.string('instructions')
        .notNullable(); 
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes'); 
};
