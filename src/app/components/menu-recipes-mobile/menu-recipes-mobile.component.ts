import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-menu-recipes-mobile',
  templateUrl: './menu-recipes-mobile.component.html',
})
export class MenuRecipesMobileComponent implements OnInit {

  @Output() index = new EventEmitter()
  collapseItems = []
  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.collapseInit();
  }

  collapse(i) {
    this.collapseAll();
    this.collapseItems[i] = !this.collapseItems[i]
  }

  collapseAll() {
    this.collapseItems = []
    this.collapseInit()
  }

  collapseInit() {
    this.data.getRecipes().forEach(
      (item) => {
        this.collapseItems.push(true)
      }
    )
  }
}
