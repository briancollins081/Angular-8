import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeBookService } from '../recipebook.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  selectRecipe(recipe: Recipe){
    console.log("Selected the recipe");
    this.recipeBookService.recipeSelected.emit(recipe);
  }
}
