import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-menu-recipes',
  templateUrl: './menu-recipes.component.html',
})
export class MenuRecipesComponent implements OnInit {

  @Output() index = new EventEmitter()
  constructor(public data: DataService) {
  }

  ngOnInit() {}
}
