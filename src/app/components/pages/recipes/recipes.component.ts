import {Component, OnInit} from '@angular/core'
import {DataService} from "../../../services/data.service";
import {LocalDeviceDetectorService} from "../../../services/local-device-detector.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  recipe
  modal = false
  constructor(public data: DataService, public localDevice: LocalDeviceDetectorService) {
  }

  ngOnInit() {
    this.recipe = this.data.getRecipes()[0];
  }

  changeRecipe(i) {
    this.recipe = this.data.getRecipes()[i];
  }
}
