import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-menu-recipes-mobile',
  templateUrl: './menu-recipes-mobile.component.html',
  styleUrls: ['./menu-recipes-mobile.component.scss'],
})
export class MenuRecipesMobileComponent implements OnInit {

  @Output() index = new EventEmitter()
  collapseItems = []
  modal = false
  video = ''

  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.collapseInit();
  }

  showModal(video) {
    this.video = video
    this.modal = !this.modal
  }

  closeModal() {
    this.video = ''
    this.modal = false
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
