const db = require('./db-config') 

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions
}

function getRecipes() {
    return db('recipes'); 
}

function getShoppingList(id) {
    return db('recipe_ingredients as r')
    .join("ingredients as i", "r.ingredient_id", "ingredients.id") // ingredients is the table we're joining recipe_ingredients with.  We only want to match where the foreign key of recipe.ingredients matches the primary ID key of of ingredients table
    .where({recipe_id: id}) //deconstructing, recipe_id is implied from line 18
    .select("i.name", "r.quantity") // narrowing down the columns we actually want
}

function getInstructions(id) {
    // return instructions
    return db('instructions as i') // aliasing instructions
        .join("recipes as r", "i.recipe_id", "r.id")  //joining with instructions with recipes, 
        .where({recipe_id: id}) // to narrow down, we grab only the i.recipe_id where it matches the id inputed by the user
        .select("i.steps_number", "i.instructions") // selecting the rows of the information we actually want
        .orderBy('i.steps_number'); // sorting by the steps_number
}
