import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-menu-recipes-mobile',
  templateUrl: './menu-recipes-mobile.component.html',
})
export class MenuRecipesMobileComponent implements OnInit {

  @Output() index = new EventEmitter()
  constructor(public data: DataService) {
  }

  ngOnInit() {}
}
