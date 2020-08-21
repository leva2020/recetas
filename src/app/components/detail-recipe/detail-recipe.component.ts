import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss'],
})
export class DetailRecipeComponent implements OnInit, OnChanges {

  modal = false;
  @Input() recipe;
  @Input() modalMenu;
  @Output() video = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.modalMenu) {
      this.openModal();
    }
  }

  openModal() {
    if (this.recipe.video !== '') {
      this.modal = !this.modal;
      this.video.emit(this.recipe.video);
    }
  }
}
