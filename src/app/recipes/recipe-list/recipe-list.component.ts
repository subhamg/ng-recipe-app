import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  // In ngOnInit, I can now say this recipe equals this recipe service get recipes and we will get this copy of recipes, this copy of that array.

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
