import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss'],
})
export class DetailRecipeComponent implements OnInit {

  modal = false
  @Input() recipe;
  @Output() video = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  openModal() {
    if (this.recipe.video !== '') {
      this.modal = !this.modal
      this.video.emit(this.recipe.video)
    }
  }
}
