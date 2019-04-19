import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'A super-tasty Schnitzel - just awesome!', 
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
      ];

    // Add a getRecipes method which will return this array, so that we can get access to it from outside.
    // If I were to return it like this, I actually return the direct reference to this array, well if we now change something on this array, we will change it on the array in this service.
    // Therefore, I will call slice with no arguments, this will simply return a new array which is an exact copy of the one in this service file.
    // So therefore, we really can't access the recipes array stored here from outside, we only get a copy,

    getRecipes() {
        return this.recipes.slice(); 
    }
}