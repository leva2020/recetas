import {Component, OnInit} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-menu-recipes',
  templateUrl: './menu-recipes.component.html',
})
export class MenuRecipesComponent implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit() {}
}
