const db = require('./db-config') 

- `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions
}

function getRecipes() {
    return db('recipes'); 
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as r')
        .join("ingredients", "r.ingredient_id", "ingredients.id")
        .where(recipe_id, "r.recipe_id")
        .select("ingredients.name", "r.quantity")
}

function getInstructions(recipe_id) {
    return db('')
}