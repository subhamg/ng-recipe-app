import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe3', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      ];

    // Add a getRecipes method which will return this array, so that we can get access to it from outside.
    // If I were to return it like this, I actually return the direct reference to this array, well if we now change something on this array, we will change it on the array in this service.
    // Therefore, I will call slice with no arguments, this will simply return a new array which is an exact copy of the one in this service file.
    // So therefore, we really can't access the recipes array stored here from outside, we only get a copy,

    getRecipes() {
        return this.recipes.slice(); 
    }
}