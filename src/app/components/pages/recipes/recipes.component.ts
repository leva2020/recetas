import {Component, OnInit} from '@angular/core'
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {

  recipe
  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.recipe = this.data.getRecipes()[0];
  }

  changeRecipe(i) {
    this.recipe = this.data.getRecipes()[i];
  }
}
